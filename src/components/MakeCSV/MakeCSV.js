import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import linesToCSV from "../../functions/linesToCSV";
import { useSelector } from "react-redux";
const MakeCSV = () => {
    const [lessValue, setLessValue] = useState(0);
    const lines = useSelector(state => state.text.lines);
    const regLengths = useSelector(state => state.input.lengths);
    const changeLessValue = (val) => {
        if (val) {
            setLessValue(val);
        }
        else {
            setLessValue(0);
        }
    };
    const csvMaker = () => {
        const csvFile = linesToCSV(lines, lessValue, regLengths);
        if (csvFile) {
            console.log(csvFile);
            const csv = csvFile.map(row => row.map(item => (typeof item === 'string' && item.indexOf(',') >= 0) ? `"${item}"` : String(item)).join(',')).join('\n');
            const data = encodeURI('data:text/csv;charset=utf-8,' + csv);
            window.open(data);
        }
        else {
            console.log("CSV File not generated");
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "my-2", children: [_jsxs("p", { children: ["Do not Include if a group contains  less than :", " ", _jsx("input", { onInput: (e) => changeLessValue(e.target.value), value: lessValue, className: "border-2 border-[rgba(0,0,0,0.3)]", type: "number" }), " ", "matches"] }), _jsx("button", { onClick: csvMaker, className: "border-2 px-2 border-[rgba(0,0,0,0.3)] bg-green-300", children: _jsx("p", { className: "text-[1em]", children: "Make CSV" }) })] }) }));
};
export default MakeCSV;
