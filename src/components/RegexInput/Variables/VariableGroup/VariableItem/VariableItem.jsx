import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRegexVariableAlias, setRegexVariableState } from "../../../../../slices/regexSlice";

const VariableItem = (props) => {

  const dispatch = useDispatch();

  const toggleIsActive = () => {
    if (props.data.active) {
      dispatch(setRegexVariableState({ id: props.data.id, state: false }));
    } else {
      dispatch(setRegexVariableState({ id: props.data.id, state: true }));
    }
  };

  const updateAlias = (newalias) => {
    dispatch(setRegexVariableAlias({id: props.data.id, alias: newalias}))
  }

  return (
    <>
      <div className="grid grid-cols-11 max-w-[800px] gap-2 mb-2">
        <div className="flex justify-center items-center col-span-1">
          <button
            onClick={(e) => {
              toggleIsActive();
            }}
            className={`${
              props.data.active ? "bg-green-400" : "bg-white"
            } w-8 h-8 rounded-md border-2 border-black shadow-1 shadow-1-active`}
          >
            ✓
          </button>
        </div>
        <div
          className={`pl-4 p-2 ${
            props.data.active ? "bg-white" : "bg-gray-400"
          } rounded-md border-2 border-black col-span-5`}
        >
          <p>{props.data.content}</p>
        </div>
        <input
          type="text"
          placeholder={`Label for ${props.data.content}`}
          value={props.data.alias}
          onInput={(e) => {updateAlias(e.target.value)}}
          className={`pl-4 p-2 ${
            props.data.active ? "bg-white" : "bg-gray-400"
          } rounded-md border-2 border-black col-span-5`}
        ></input>
      </div>
    </>
  );
};

export default VariableItem;
