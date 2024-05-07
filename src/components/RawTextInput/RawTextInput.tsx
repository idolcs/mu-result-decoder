import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRawText } from "../../store/reducers/textSlice";

const RawTextInput = () => {

  const dispatch = useDispatch();
  const [rawText, setRawTextState] = useState("");

  useEffect(() => {
    dispatch(setRawText(rawText))
  }, [rawText])

  return (
    <>
      <div>
        {rawText != "" ? (<><p>Input Already Fed</p></>) : 
        <>
        <textarea
          value={rawText}
          onInput={(e) => setRawTextState(e.target.value)}
          className="w-full border-2 border-[rgba(0,0,0,0.3)]"
          name=""
          id=""
          rows="10"
          placeholder="Your Raw Text Here"
        ></textarea>
        </>
    }
      </div>
    </>
  );
};

export default RawTextInput;
