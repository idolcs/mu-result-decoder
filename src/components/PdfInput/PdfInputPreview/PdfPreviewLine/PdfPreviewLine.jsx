import { useState } from "react";
import { removeRegexInput, setRegexInput } from "../../../../slices/regexSlice";
import {useDispatch} from "react-redux";

const PdfPreviewLine = (props) => {

    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        if (!isActive) {
            let regexInputData = props.data.split(/\n/);
            regexInputData.map(d => {
                if(d != "" && d.match(/([A-Za-z0-9])/)){
                    dispatch(setRegexInput(d.replace(/\//g, "").replace(/\|/g, " | ").replace(/\+/g, "+ ").replace(/\s+/g, ' ').trim()));
                }
            })
            // console.log(props.data.split(/\n/));
        }else{
            dispatch(removeRegexInput(props.data));
        }
        setIsActive(!isActive)

    }

    return (
        <>
            <div className="p-2 border-2 border-black rounded mb-2 flex">
                <button onClick={() => { toggleButton() }} className={`px-2 w-8 h-full ${isActive ? "bg-green-300" : "bg-white"} mr-4 rounded border-2 border-black shadow-1 shadow-1-active`}>{isActive ? "✓" : "+"}</button>
                <pre>{props.data}</pre>
            </div>
        </>
    )
}

export default PdfPreviewLine;