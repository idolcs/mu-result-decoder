import {useSelector} from "reaact-redux"


const PdfInputPreview = () => {

    pdfObj = useSelector(state => state.pdf)

  return (
    <>
      <div className="p-5 mt-5 rounded-md bg-purple-300 border-2 border-black shadow-1">
        <p>{pdfObj.pretty}</p>
      </div>
    </>
  );
};

export const PdfInputPreview;