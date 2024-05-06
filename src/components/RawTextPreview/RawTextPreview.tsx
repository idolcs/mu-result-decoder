import { useState } from "react";
import { useSelector } from "react-redux";

const RawTextPreview = () => {
  const [expanded, setExpanded] = useState(true);

  const rawText = useSelector((state) => state.text.rawText);

  return (
    <>
      <div className="my-2">
        <div className="p-2 bg-rose-300 flex items-center justify-between">
          <p>Raw Preview</p>
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
          <pre>{rawText}</pre>
        </div>
      </div>
    </>
  );
};

export default RawTextPreview;
