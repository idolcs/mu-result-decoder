import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { setDivider } from "../../store/reducers/textSlice.ts";
import { useEffect, useState } from "react";
const DividerInput = () => {
    const [dividerState, setDividerState] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setDivider(dividerState));
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [dividerState]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "border p-2", children: [_jsx("p", { children: "Divider Input" }), _jsx("input", { onChange: (e) => setDividerState(e.target.value), value: dividerState, type: "text", className: "border-2 border-[rgba(0,0,0,0.3)] w-[40em]" })] }) }));
};
export default DividerInput;
