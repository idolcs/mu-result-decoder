import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";



const findMatches = () => {

    const state = useSelector((state) => state);

    
    
    let matches = state.regex.output.map((reg) =>
      state.pdf.input.filter(inp => inp.match(new RegExp(reg,"g")))
    );
    
    console.log(matches);
}


export default findMatches;