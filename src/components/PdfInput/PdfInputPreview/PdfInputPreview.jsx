import {useSelector, useDispatch} from "react-redux"
import PdfPreviewLine from "./PdfPreviewLine/PdfPreviewLine";
import { useEffect } from "react";
import { addPDFInput, modifyPDFInput } from "../../../slices/pdfSlice";

const PdfInputPreview = () => {

  const pdfObj = useSelector(state => state.pdf)

  const dispatch = useDispatch();

  useEffect(() => {
    // const whitespaceRemoved = pdfObj.input.map(str => str.replace(/\//g, "").replace(/\+/g, "+ ").replace(/\s+/g, ' ').trim())
    console.warn("Removed everything!");
    const whitespaceRemoved = pdfObj.input.map(str => str.replace(/\//g, "").replace(/\|/g, " | ").replace(/\+/g, "+ ").replace(/\s+/g, ' ').trim())
    dispatch(modifyPDFInput(whitespaceRemoved));
  }, [pdfObj.count])

  return (
    <>
      <div className="p-5 mt-5 rounded-md bg-purple-300 border-2 border-black shadow-1 max-h-[500px] overflow-y-auto custom-scrollbar">
      <p className="text-[0.6em] mb-2">TXT input: </p>
        <p>{pdfObj.input.map((line) => <PdfPreviewLine data={line} />)}</p>
      </div>
    </>
  );
};

export default PdfInputPreview;