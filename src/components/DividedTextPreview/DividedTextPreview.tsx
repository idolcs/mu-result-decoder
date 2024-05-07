import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDividedText } from "../../store/reducers/textSlice";

const DividedTextPreview = () => {
  const dispatch = useDispatch();
  const textState = useSelector((state) => state.text);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let localDividedText = textState.rawText.split(textState.divider);
    localDividedText = localDividedText.map((text: string) =>
      text.replace(/\+/g, "+ ").replace(/\|/g, " | ")
    );
    dispatch(setDividedText(localDividedText));
  }, [textState.divider]);

  let textBoxes = [];

  if (expanded) {
    textBoxes = textState.dividedText.map((text: string) => {
      return (
        <>
          <div className="border-2 border-[rgba(0,0,0,0.3)] m-2 p-2">
            <pre>{text}</pre>
          </div>
        </>
      );
    });
  }else{
    textBoxes = [""];
  }

    return (
      <>
        <div className="my-2">
          <div className="p-2 bg-rose-300 flex items-center justify-between">
            <p>Divided Text Preview</p>
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

export default DividedTextPreview;
