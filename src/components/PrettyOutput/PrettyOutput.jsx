import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import findMatches from "../../utils/matches";
import { setFinalMatches, setOutputRaw } from "../../slices/outputSlice";
import html2pdf from "html2pdf.js";

const PrettyOutput = () => {
  const dispatch = useDispatch();

  const pdf = useSelector((state) => state.pdf);
  const regex = useSelector((state) => state.regex);
  const output = useSelector((state) => state.output);

  const findMatches = () => {
    // finding matches

    // let matches = regex.output.map((reg) =>
    //   pdf.input.filter((inp) => inp.match(new RegExp(reg, "g")))
    // );

    let localePdfInput = [...pdf.input];

    let matches = [];

    localePdfInput.map((group) => {
      let localGroup = [];
      let lines = group.split(/\n/);
      regex.output.map((reg) => {
        lines.map((line) => {
          let trimmedline = line.replace(/\//g, "").replace(/\|/g, " | ").replace(/\+/g, "+ ").replace(/\s+/g, ' ').trim();
          if (trimmedline.match(new RegExp(reg))) {
            localGroup.push(trimmedline);
          }
        });
      });
      if (localGroup.length > 0) {
        matches.push(localGroup);
      }
    });

    // extract variables

    let variables = [];

    // for (let i = 0; i < regex.output.length; i++) {
    //   let vars = matches[i].map((str) => {
    //     let tempVar = str.match(new RegExp(regex.output[i]));
    //     tempVar.shift();
    //     return tempVar;
    //   });
    //   variables.push(vars);
    // }

    matches.map((lines) => {
      const vars = lines.map((line) => {
        let innervars = [];
        regex.output.map((reg) => {
          let tempVar = line.match(new RegExp(reg));
          if (tempVar) {
            tempVar.shift();
            innervars = tempVar;
          }
        });
        return innervars;
      });
      variables.push(vars);
    });

    // console.log(variables);

    dispatch(setOutputRaw(variables));
  };

  const joinMatches = () => {
    // let maxArrayNeeded = 0;
    // for (let i = 0; i < output.rawJson.length; i++) {
    //   if (maxArrayNeeded < output.rawJson[i].length) {
    //     maxArrayNeeded = output.rawJson[i].length;
    //   }
    // }

    // // console.log("max array needed: ", maxArrayNeeded)

    // let joined = [...new Array(maxArrayNeeded + 1)].map(() => []);
    // for (let i = 0; i < regex.variables.length; i++) {
    //   // console.log("i");
    //   for (let j = 0; j < regex.variables[i].length; j++) {
    //     // console.log("j")
    //     if (regex.variables[i][j].active != false) {
    //       joined[0].push(regex.variables[i][j].alias);
    //       for (let k = 0; k < output.rawJson[i].length; k++) {
    //         joined[k + 1].push(output.rawJson[i][k][j]);
    //       }
    //     }
    //   }
    // }
    // console.log(joined);

    // let localrawjson = [...output.rawJson];

    // let finalArray = localrawjson.map(arr => {
    //   let localArr = [];
    //   arr.map(item => {
    //     item.map(i => {
    //       localArr.push(i)
    //     })
    //   })
    //   return localArr;
    // })

    let finalArray = [];

    for (let i = 0; i < output.rawJson.length; i++) {
      let thisArr = [];
      for (let j = 0; j < regex.variables.length; j++) {
        if (regex.variables[j]) {
          for (let k = 0; k < regex.variables[j].length; k++) {
            if (
              regex.variables[j][k].active != false &&
              output.rawJson[i].length >= j + 1
            ) {
              if (output.rawJson[i][j][k]) {
                thisArr.push(output.rawJson[i][j][k]);
              }
            }
          }
        }
      }

      // console.log(thisArr);
      finalArray.push(thisArr);
    }



    let headArray = [];

    for (let i = 0; i < regex.variables.length; i++) {
      if (regex.variables[i] != null) {
        for (let j = 0; j < regex.variables[i].length; j++) {
          if(regex.variables[i][j].active){
            headArray.push(regex.variables[i][j].alias);
          }
        }
      }
    }

    finalArray.unshift(headArray);

    console.log(finalArray);

    dispatch(setFinalMatches(finalArray));
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
          let csvContent =
            "data:text/csv;charset=utf-8," +
            output.finalMatches.map((e) => e.join(",")).join("\n");
          var encodedUri = encodeURI(csvContent);
          window.open(encodedUri);
        }}
      >
        Print
      </button>
      <div className="p-4 bg-white rounded-md border-black border-2 shadow-1">
        <div>
          <table id="outputTable" className="bg-purple-100">
            {mainTable}
          </table>
        </div>
      </div>
    </>
  );
};

export default PrettyOutput;
