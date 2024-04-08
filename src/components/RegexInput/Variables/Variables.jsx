import {useSelector, useDispatch} from "react-redux";
import VariableItem from "./VariableGroup/VariableItem/VariableItem";
import { useEffect } from "react";
import { setRegexVaribles } from "../../../slices/regexSlice";
import VariableGroup from "./VariableGroup/VariableGroup";

const Variables = () => {

  const variables = useSelector(state => state.regex.variables);
  const regex = useSelector(state => state.regex);

  const dispatch = useDispatch();

  const extractVariables = () => {
    let variables = [];
    for(let i = 0; i < regex.input.length; i++){
      let vars = regex.input[i].text.match(new RegExp(regex.output[i]));
      if(vars != null){
        vars.shift();
      }
      variables.push(vars);
    }
    dispatch(setRegexVaribles(variables))
  }

  useEffect(() => {
    extractVariables()
  }, [regex.output])

  return (
    <>
    <div className="p-4 mt-4 rounded-md shadow-1 bg-purple-200 border-black border-2">
      <p className="text-[0.6em] mb-2">Varibles: </p>
      <div>
        {regex.variables.map(group => (<VariableGroup data={group}/>))}
      </div>
    </div>
    </>
  );
};

export default Variables;