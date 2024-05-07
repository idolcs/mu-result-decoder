import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLines } from "../../store/reducers/textSlice";

const LinesPreview = () => {
  const dispatch = useDispatch();
  const textState = useSelector((state) => state.text);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let linesLocal = textState.dividedText.map((text) => {
      let lines = text.split(/\n/);
      let group = lines.map((line) => {
        return {
          text: line,
          matches: [],
        };
      });
      return group;
    });

    for (let i = 0; i < linesLocal.length; i++) {
      linesLocal[i] = linesLocal[i].filter((line) => {
        if (!/\S/.test(line.text)) {
          return false;
        } else {
          return true;
        }
      });
    }

    linesLocal = linesLocal.filter((groups) => {
      if (groups.length > 0) {
        return true;
      } else {
        return false;
      }
    });

    linesLocal = linesLocal.map((groups) => {
      return groups.map((line) => {
        let newLine = { ...line };
        newLine.text = newLine.text
          .replace(/\//, "")
          .replace(/\s+/g, " ")
          .trim();
        return newLine;
      });
    });

    dispatch(setLines(linesLocal));
  }, [textState.dividedText]);

  let textBoxes = [];

  if(expanded){
    textBoxes = textState.lines.map((linesgroup: string[]) => {
      return (
        <>
          <div className="border-2 border-[rgba(0,0,0,0.3)] m-2 p-2">
            <pre>
              {linesgroup.map((line) => {
                return (
                  <>
                    <div className={`border-2 border-[rgba(0,0,0,0.3)] m-2 p-2 flex ${line.matches.length > 0 ? "bg-green-200" : ""}`}>
                      <div className="w-4 mr-2">
                          <p></p>
                      </div>
                      <div>
                        <p>{line.text}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </pre>
          </div>
        </>
      );
    })
  }else{
    textBoxes = [""];
  }

  return (
    <>
      <div className="my-2">
        <div className="p-2 bg-rose-300 flex items-center justify-between">
          <p>Lines Preview</p>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "close" : "open"}
          </button>
        </div>
        <div
          className={`${
            expanded
              ? "p-2 h-[20em] overflow-y-scroll"
              : "h-0 overflow-y-hidden"
          }`}
        >
          {textBoxes}
        </div>
      </div>
    </>
  );
};

export default LinesPreview;
