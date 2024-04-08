import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import findMatches from "../../utils/matches";
import { setFinalMatches, setOutputRaw } from "../../slices/outputSlice";
import  html2pdf  from "html2pdf.js";

const PrettyOutput = () => {
  const dispatch = useDispatch();

  const pdf = useSelector((state) => state.pdf);
  const regex = useSelector((state) => state.regex);
  const output = useSelector((state) => state.output);

  const findMatches = () => {
    // finding matches
    let matches = regex.output.map((reg) =>
      pdf.input.filter((inp) => inp.match(new RegExp(reg, "g")))
    );
    // console.log(matches);

    // extract variables
    let variables = [];
    for (let i = 0; i < regex.output.length; i++) {
      let vars = matches[i].map((str) => {
        let tempVar = str.match(new RegExp(regex.output[i]));
        tempVar.shift();
        return tempVar;
      });
      variables.push(vars);
    }

    dispatch(setOutputRaw(variables));
  };

  const joinMatches = () => {
    let maxArrayNeeded = 0;
    for (let i = 0; i < output.rawJson.length; i++) {
      if (maxArrayNeeded < output.rawJson[i].length) {
        maxArrayNeeded = output.rawJson[i].length;
      }
    }

    // console.log("max array needed: ", maxArrayNeeded)

    let joined = [...new Array(maxArrayNeeded + 1)].map(() => []);
    for (let i = 0; i < regex.variables.length; i++) {
      // console.log("i");
      for (let j = 0; j < regex.variables[i].length; j++) {
        // console.log("j")
        if (regex.variables[i][j].active != false) {
          joined[0].push(regex.variables[i][j].alias);
          for (let k = 0; k < output.rawJson[i].length; k++) {
            joined[k + 1].push(output.rawJson[i][k][j]);
          }
        }
      }
    }
    console.log(joined);
    dispatch(setFinalMatches(joined));
  };

  const mainTable = output.finalMatches.map((row) => (
    <tr>
      {row.map((cell) => (
        <td className="p-2 border-2 border-black">{cell}</td>
      ))}
    </tr>
  ));

  return (
    <>
      <button
        className="p-4 mr-4 rounded-md bg-purple-500 mb-4 shadow-2 shadow-2-active"
        onClick={() => {
          findMatches();
        }}
      >
        Find Matches
      </button>
      <button
        className="p-4 mr-4 rounded-md bg-purple-500 mb-4 shadow-2 shadow-2-active"
        onClick={() => {
          joinMatches();
        }}
      >
        Join Matches
      </button>
      <button
        className="p-4 mr-4 rounded-md bg-purple-500 mb-4 shadow-2 shadow-2-active"
        onClick={() => {
          html2pdf(document.getElementById("outputTable"));
          // console.log(typeof(html2pdf))
        }}
      >
        Print
      </button>
      <div className="p-4 bg-white rounded-md border-black border-2 shadow-1">
        <div>
          <table id="outputTable" className="bg-purple-100">{mainTable}</table>
        </div>
      </div>
    </>
  );
};

export default PrettyOutput;
