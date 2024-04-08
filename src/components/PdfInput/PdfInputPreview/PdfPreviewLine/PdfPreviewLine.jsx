import { useState } from "react";
import { removeRegexInput, setRegexInput } from "../../../../slices/regexSlice";
import {useDispatch} from "react-redux";

const PdfPreviewLine = (props) => {

    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        if (!isActive) {
            dispatch(setRegexInput(props.data));
        }else{
            dispatch(removeRegexInput(props.data));
        }
        setIsActive(!isActive)

    }

    return (
        <>
            <div className="p-2 border-2 border-black rounded mb-2 flex">
                <button onClick={() => { toggleButton() }} className={`px-2 w-8 h-full ${isActive ? "bg-green-300" : "bg-white"} mr-4 rounded border-2 border-black shadow-1 shadow-1-active`}>{isActive ? "✓" : "+"}</button>
                <p>{props.data}</p>
            </div>
        </>
    )
}

export default PdfPreviewLine;