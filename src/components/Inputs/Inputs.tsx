import { useState } from "react";

const Inputs = () => {

    const initInputs = [
        {
            pos: 0,
            text: ""
        }
    ]

    const [inputs, setInputs] = useState(initInputs);

    const addInput = (pos:number, val:string) => {
        let newInputs = [...inputs];
        newInputs[pos].text = val;
        setInputs(newInputs);
        console.log(inputs);
    }

    const addEmptyInput = () => {
        let newInputs = [...inputs];
        newInputs.push(
            {
                pos: inputs.length - 1,
                text: ""
            }
        )
        setInputs(newInputs);
    }

    return (
        <>
            <div>
                <p>Matches to Make</p>
                <div className="flex flex-col">
                    {inputs.map(inp => {
                        return(
                            <>
                                <input className="border-2 border-[rgba(0,0,0,0.4)] p-1 w-[40em]" type="text" value={inp.text} onInput={(e) => addInput(inp.pos, e.target.value)} />
                            </>
                        )
                    })}
                </div>
                <div className="mt-2 flex flex-col gap-2">
                    <button className="px-2 border-2 w-fit" onClick={addEmptyInput}>+</button>
                    <button className="px-2 border-2 w-fit bg-green-300">Make Matches</button>
                </div>
            </div>
        </>
    )
}

export default Inputs;