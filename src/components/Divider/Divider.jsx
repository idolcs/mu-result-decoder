import { setDivider } from "../../slices/regexSlice";
import { useDispatch } from "react-redux";

const Divider = () => {

    const dispatch = useDispatch();

  return (
    <>
      <input
        className="p-4 w-full rounded-md col-span-full border-2 border-black  outline-none"
        placeholder="Divider here"
        type="text"
        id="regexinput"
        onInput={(e) => dispatch(setDivider(e.target.value))}
      />
    </>
  );
};

export default Divider;
