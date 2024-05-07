import { useDispatch } from "react-redux";
import { setRawText } from "./store/reducers/textSlice.ts";
import RawTextPreview from "./components/RawTextPreview/RawTextPreview";
import DividerInput from "./components/DividerInput/DividerInput";
import DividedTextPreview from "./components/DividedTextPreview/DividedTextPreview.tsx";
import LinesPreview from "./components/LinesPreview/LinesPreview.tsx";
import MatchTiles from "./components/MatchTiles/MatchTiles.tsx";
import Inputs from "./components/Inputs/Inputs.tsx";
import MakeCSV from "./components/MakeCSV/MakeCSV.tsx";
import RawTextInput from "./components/RawTextInput/RawTextInput.tsx";

function App() {
  return (
    <>
      <div className="p-4">
        <p className="text-[1.2em]">MU Result Decoder</p>
        <div>
          <RawTextInput />
        </div>
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
        <div>
          <MakeCSV />
        </div>
      </div>
    </>
  );
}

export default App;
