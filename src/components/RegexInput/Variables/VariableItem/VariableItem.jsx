import { useState } from "react";

const VariableItem = (props) => {
  const [isActive, setIsActive] = useState(true);

  const toggleIsActive = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }

  return (
    <>
      <div className="grid grid-cols-11 max-w-[800px] gap-2 mb-2">
        <div className="flex justify-center items-center col-span-1">
          <button 
        onClick={(e) => {toggleIsActive()}}
          className={`${isActive ? "bg-green-400" : "bg-white"} w-8 h-8 rounded-md border-2 border-black shadow-1 shadow-1-active`}>
            ✓
          </button>
        </div>
        <div className={`pl-4 p-2 ${isActive ? "bg-white" : "bg-gray-400"} rounded-md border-2 border-black col-span-5`}>
          <p>{props.data}</p>
        </div>
        <input
          type="text"
          placeholder={`Label for ${props.data}`}
          className={`pl-4 p-2 ${isActive ? "bg-white" : "bg-gray-400"} rounded-md border-2 border-black col-span-5`}
        ></input>
      </div>
    </>
  );
};

export default VariableItem;
