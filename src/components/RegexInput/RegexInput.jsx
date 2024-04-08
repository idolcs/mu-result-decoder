import { useEffect } from "react";
import { strToRegex } from "../../utils/regexhandler";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegexInput,
  setRegexMatches,
  setRegexOutput,
  setRegexVaribles,
} from "../../slices/regexSlice";
import Variables from "./Variables/Variables";
import RegexInputItem from "./RegexInputItem/RegexInputItem";

const RegexInput = () => {
  const regex = useSelector((state) => state.regex);
  const pdf = useSelector((state) => state.pdf);

  const dispatch = useDispatch();

  let matches = [];



  const buildRegex = () => {
    const output = regex.input.map((el) => strToRegex(el.updatedText))
    dispatch(setRegexOutput(output))
  }

  return (
    <>
      <div className="p-4 bg-purple-200 rounded-md border-black border-2 shadow-1">
        <p className="text-[0.8em] mb-2">Selected Lines: </p>
        {regex.input.map((el) => (
          <RegexInputItem data={el.id} />
        ))}
        <button
          className="p-2 rounded-md bg-purple-500 shadow-2 shadow-2-active mb-4"
          onClick={() => {
            buildRegex();
          }}
        >
          Build Regex
        </button>
      </div>
      <div className="p-4 mt-4 rounded-md shadow-1 bg-purple-300 border-black border-2">
        <p className="text-[0.8em] mb-2">Regex output: </p>
        {regex.output.map(text => (<><p>{text}</p></>))}
      </div>
      <Variables />
    </>
  );
};

export default RegexInput;
