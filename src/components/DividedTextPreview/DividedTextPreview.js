import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDividedText } from "../../store/reducers/textSlice";
const DividedTextPreview = () => {
    const dispatch = useDispatch();
    const textState = useSelector((state) => state.text);
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        let localDividedText = textState.rawText.split(textState.divider);
        localDividedText = localDividedText.map((text) => text.replace(/\+/g, "+ ").replace(/\|/g, " | "));
        dispatch(setDividedText(localDividedText));
    }, [textState.divider]);
    let textBoxes = [];
    if (expanded) {
        textBoxes = textState.dividedText.map((text) => {
            return (_jsx(_Fragment, { children: _jsx("div", { className: "border-2 border-[rgba(0,0,0,0.3)] m-2 p-2", children: _jsx("pre", { children: text }) }) }));
        });
    }
    else {
        textBoxes = [""];
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "my-2", children: [_jsxs("div", { className: "p-2 bg-rose-300 flex items-center justify-between", children: [_jsx("p", { children: "Divided Text Preview" }), _jsx("button", { onClick: () => setExpanded(!expanded), children: expanded ? "close" : "open" })] }), _jsx("div", { className: `${expanded
                        ? "p-2 h-[20em] overflow-y-scroll"
                        : "h-0 overflow-y-hidden"}`, children: textBoxes })] }) }));
};
export default DividedTextPreview;
