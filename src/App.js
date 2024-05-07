import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import resultTxt from "./assets/result.txt";
import { setRawText } from "./store/reducers/textSlice.ts";
import RawTextPreview from "./components/RawTextPreview/RawTextPreview";
import DividerInput from "./components/DividerInput/DividerInput";
import DividedTextPreview from "./components/DividedTextPreview/DividedTextPreview.tsx";
import LinesPreview from "./components/LinesPreview/LinesPreview.tsx";
import MatchTiles from "./components/MatchTiles/MatchTiles.tsx";
import Inputs from "./components/Inputs/Inputs.tsx";
import MakeCSV from "./components/MakeCSV/MakeCSV.tsx";
function App() {
    const dispatch = useDispatch();
    fetch(resultTxt)
        .then((res) => res.text())
        .then((text) => {
        dispatch(setRawText(text));
    })
        .catch((e) => console.error(e));
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "p-4", children: [_jsx("p", { className: "text-[1.2em]", children: "MU Result Decoder" }), _jsx("div", { children: _jsx(RawTextPreview, {}) }), _jsx("div", { children: _jsx(DividerInput, {}) }), _jsx("div", { children: _jsx(DividedTextPreview, {}) }), _jsx("div", { children: _jsx(LinesPreview, {}) }), _jsx("div", { children: _jsx(MatchTiles, {}) }), _jsx("div", { children: _jsx(Inputs, {}) }), _jsx("div", { children: _jsx(MakeCSV, {}) })] }) }));
}
export default App;
