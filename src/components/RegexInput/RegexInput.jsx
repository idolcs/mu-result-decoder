import { useEffect } from "react";
import { strToRegex } from "../../utils/regexhandler";
import { useDispatch, useSelector } from "react-redux";
import { setRegexInput, setRegexMatches, setRegexOutput, setRegexVaribles } from "../../slices/regexSlice";
import Variables from "./Variables/Variables";

const RegexInput = () => {


  const regex = useSelector((state) => state.regex);
  const pdf = useSelector((state) => state.pdf);

  const dispatch = useDispatch();

  let matches = [];

  useEffect(() => {
    const preVariables = regex.input.replaceAll("`", "").replaceAll("^", "").replaceAll("$", ""); 
    let variables = preVariables.match(new RegExp(regex.output));
    variables.shift();
    dispatch(setRegexVaribles(variables));

    for (let i = 0; i < pdf.input.length; i++) {
      if (pdf.input[i].match(new RegExp(regex.output))) {
        matches.push(pdf.input[i]);
      }
    }
    dispatch(setRegexMatches(matches));
    matches = [];
  }, [regex.output]);

  return (
    <>
      <div className="flex">
        <input
          className="p-4 w-full rounded-md col-span-full border-2 border-black shadow-1 outline-none"
          placeholder="Your input here"
          type="text"
          id="regexinput"
          onInput={(e) => dispatch(setRegexInput(e.target.value))}
        />
        <button
          className="shrink-0 p-4 rounded-md ml-4 bg-purple-500 shadow-2 shadow-2-active"
          onClick={() => {
            console.log(regex);
            const regexOuput  = strToRegex(regex.input);
            console.log("Regex Output: ", regexOuput);
            dispatch(setRegexOutput(regexOuput));
          }}
        >
          Build Regex
        </button>
      </div>
      <div className="p-4 mt-4 rounded-md shadow-1 bg-purple-300 border-black border-2">
        <p className="text-[0.6em] mb-2">Regex output: </p>
        <p>{regex.output}</p>
      </div>
      <Variables />
    </>
  );
};

export default RegexInput;
