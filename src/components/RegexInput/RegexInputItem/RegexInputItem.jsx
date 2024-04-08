import { updateRegexInput } from "../../../slices/regexSlice";
import { useDispatch, useSelector } from "react-redux";

const RegexInputItem = (props) => {

  const id = props.data;
  const input = useSelector(state => state.regex.input)
  const dispatch = useDispatch();

  const updateValue = (updatedText) => {
    dispatch(updateRegexInput({id: id, updatedText: updatedText}))
  }

  return (
    <>
      <div className="mb-2">
        <input
          className="p-4 w-full rounded-md col-span-full border-2 border-black  outline-none"
          placeholder="Your input here"
          type="text"
          id="regexinput"
          value={input.filter(el => el.id === id)[0].updatedText}
          onInput={(e) => {updateValue(e.target.value)}}
        />
      </div>
    </>
  );
};

export default RegexInputItem;
