import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector } from "react-redux";
const MatchTiles = () => {
    const lines = useSelector(state => state.text.lines);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "flex max-w-full flex-wrap", children: lines.map(line => {
                const numberOfMatches = Object.keys(line).reduce((acc, cur) => {
                    return acc + line[cur].matches.length;
                }, 0);
                return (_jsx(_Fragment, { children: _jsx("div", { className: `p-1 border-2 text-[0.5em] ${numberOfMatches > 0 ? "bg-green-300" : ""}`, children: numberOfMatches }) }));
            }) }) }));
};
export default MatchTiles;
