import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputsLengths, setRawInput } from "../../store/reducers/inputSlice";
import stringcheck, { regToArray } from "../../functions/stringcheck";
import { setLines } from "../../store/reducers/textSlice";

const Inputs = () => {
  const lines = useSelector((state) => state.text.lines);

  const dispatch = useDispatch();

  const initInputs = [
    {
      pos: 0,
      text: "",
    },
  ];

  const [inputs, setInputs] = useState(initInputs);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setRawInput(inputs));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [inputs]);

  const addInput = (pos: number, val: string) => {
    const newInputs = inputs.map((input) => {
      if (input.pos === pos) {
        return { ...input, text: val };
      } else {
        return input;
      }
    });
    setInputs(newInputs);
  };

  const makeMatches = () => {

    let regLengths = inputs.map(inp => {
      let rtn = regToArray(inp.text);
      return rtn.length;
    })

    dispatch(setInputsLengths(regLengths));

    let localInput = [...inputs];
    dispatch(setRawInput(localInput));
    let localLines = lines.map(line => [...line]);

    for (let i = 0; i < localLines.length; i++) {
      let inputIndex = 0;
      let lastMatchedLine = -1;
      while (inputIndex < inputs.length) {
        let notMatched = true;
        let currentLine = lastMatchedLine + 1;
        while (notMatched && currentLine < localLines[i].length) {
          if (
            stringcheck(
              localLines[i][currentLine].text,
              inputs[inputIndex].text
            )
          ) {
            let returnedObject : (Boolean | {regexArray : string[], variables : string[]}) = stringcheck(
              localLines[i][currentLine].text,
              inputs[inputIndex].text
            );
            localLines[i][currentLine] = {
              ...localLines[i][currentLine],
              matches : [inputIndex],
              variables : returnedObject.variables
            };
            notMatched = false;
          }
          currentLine += 1;
        }
        inputIndex += 1;
      }
    }

    console.log(localLines);
    dispatch(setLines(localLines));
    
};

  const addEmptyInput = () => {
    let newInputs = [...inputs];
    newInputs.push({
      pos: inputs.length,
      text: "",
    });
    setInputs(newInputs);
  };

  return (
    <>
      <div>
        <p>Matches to Make</p>
        <div className="flex flex-col">
          {inputs.map((inp) => {
            return (
              <>
                <input
                  className="border-2 border-[rgba(0,0,0,0.4)] p-1 w-[40em]"
                  type="text"
                  value={inp.text}
                  onInput={(e) => addInput(inp.pos, e.target.value)}
                />
              </>
            );
          })}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <button className="px-2 border-2 w-fit" onClick={addEmptyInput}>
            +
          </button>
          <button
            className="px-2 border-2 w-fit bg-green-300"
            onClick={makeMatches}
          >
            Make Matches
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
