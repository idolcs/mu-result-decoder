import { useState } from "react";
import linesToCSV from "../../functions/linesToCSV";
import { useSelector } from "react-redux";

const MakeCSV = () => {
    
    const [lessValue, setLessValue] = useState(0);
    const lines = useSelector(state => state.text.lines);
    const regLengths = useSelector(state => state.input.lengths);

    const changeLessValue = (val) => {
        if(val){
            setLessValue(val);
        }else{
            setLessValue(0);
        }
    }

    const csvMaker = () => {
        const csvFile = linesToCSV(lines, lessValue, regLengths)
        if(csvFile){
            console.log(csvFile);
            const csv = csvFile.map(row => row.map(item => (typeof item === 'string' && item.indexOf(',') >= 0) ? `"${item}"`: String(item)).join(',')).join('\n');
            const data = encodeURI('data:text/csv;charset=utf-8,' + csv);
            window.open(data);
        }else{
            console.log("CSV File not generated");
        }
    }

  return (
    <>
      <div className="my-2">
        <p>
          Do not Include if a group contains  less than :{" "}
          <input onInput={(e) => changeLessValue(e.target.value)} value={lessValue} className="border-2 border-[rgba(0,0,0,0.3)]" type="number" />
          {" "}
          matches 
        </p>
        <button onClick={csvMaker} className="border-2 px-2 border-[rgba(0,0,0,0.3)] bg-green-300">
            <p className="text-[1em]">Make CSV</p>
        </button>
      </div>
    </>
  );
};

export default MakeCSV;
