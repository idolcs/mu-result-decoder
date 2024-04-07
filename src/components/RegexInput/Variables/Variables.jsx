import {useSelector} from "react-redux";
import VariableItem from "./VariableItem/VariableItem";

const Variables = () => {

    const variables = useSelector(state => state.regex.variables);

  return (
    <>
    <div className="p-4 mt-4 rounded-md shadow-1 bg-purple-200 border-black border-2">
      <p className="text-[0.6em] mb-2">Varibles: </p>
      <div>
        {variables.map((v) => <VariableItem data={v} />)}
      </div>
    </div>
    </>
  );
};

export default Variables;