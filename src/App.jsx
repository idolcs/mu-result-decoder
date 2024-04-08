import { useEffect } from "react";
import PdfInput from "./components/PdfInput/PdfInput";
import PrettyOutput from "./components/PrettyOutput/PrettyOutput";
import RegexInput from "./components/RegexInput/RegexInput";

function App() {

  

  return (
    <>
      <div className="p-5  bg-purple-500 w-full border-b-2 border-black flex justify-center items-center">
        <p className="bevan-regular text-[2em] text-black w-fit">
          MU RESULT DECODER
        </p>
      </div>
    <div className="w-full flex flex-col items-center">
      <div className="p-5 w-full max-w-[1200px]">
        <PdfInput />
      </div>
      <div className="p-5 w-full max-w-[1200px]">
        <RegexInput />
      </div>
      <div className="p-5 w-full max-w-[1200px]">
        <PrettyOutput />
      </div>
    </div>
    </>
  );
}

export default App;
