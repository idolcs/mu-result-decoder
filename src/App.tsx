import { useDispatch } from "react-redux";
import resultTxt from "./assets/result.txt";
import { setRawText } from "./store/reducers/textSlice.ts";
import RawTextPreview from "./components/RawTextPreview/RawTextPreview";
import DividerInput from "./components/DividerInput/DividerInput";
import DividedTextPreview from "./components/DividedTextPreview/DividedTextPreview.tsx";
import LinesPreview from "./components/LinesPreview/LinesPreview.tsx";
import MatchTiles from "./components/MatchTiles/MatchTiles.tsx";
import Inputs from "./components/Inputs/Inputs.tsx";

function App() {
  const dispatch = useDispatch();

  fetch(resultTxt)
    .then((res) => res.text())
    .then((text) => {
      dispatch(setRawText(text));
    })
    .catch((e) => console.error(e));

  return (
    <>
      <div className="p-4">
        <p className="text-[1.2em]">MU Result Decoder</p>
        <div>
          <RawTextPreview />
        </div>
        <div>
          <DividerInput />
        </div>
        <div>
          <DividedTextPreview />
        </div>
        <div>
          <LinesPreview />
        </div>
        <div>
          <MatchTiles />
        </div>
        <div>
          <Inputs />
        </div>
      </div>
    </>
  );
}

export default App;
