import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useSelector } from "react-redux";
const RawTextPreview = () => {
    const [expanded, setExpanded] = useState(false);
    const rawText = useSelector((state) => state.text.rawText);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "my-2", children: [_jsxs("div", { className: "p-2 bg-rose-300 flex items-center justify-between", children: [_jsx("p", { children: "Raw Preview" }), _jsx("button", { onClick: () => setExpanded(!expanded), children: expanded ? "close" : "open" })] }), _jsx("div", { className: `${expanded
                        ? "p-2 h-[20em] overflow-y-scroll"
                        : "h-0 overflow-y-hidden"}`, children: _jsx("pre", { children: expanded ? rawText : "" }) })] }) }));
};
export default RawTextPreview;
