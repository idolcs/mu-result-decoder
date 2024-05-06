import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  input: [],
  output: [],
  variables: [],
  matches: {},
  divider: "",
};

const setDividerFun = (state, action) => {
  state.divider = action.payload;
}

const setRegexInputFun = (state, action) => {
  let id = 1;
  if (state.input.length > 0) {
    id = state.input[state.input.length - 1].id + 1;
  }
  const newInput = {
    id,
    text: action.payload,
    updatedText: action.payload,
    matchedWith: [],
  };
  state.input.push(newInput);
};

const removeRegexInputFun = (state, action) => {
  let text = action.payload;
  state.input = state.input.filter((el) => el.text != text);
};

const updateRegexInputFun = (state, action) => {
  state.input = state.input.map((el) => {
    if (el.id == action.payload.id) {
      let newElement = { ...el };
      newElement.updatedText = action.payload.updatedText;
      return newElement;
    } else {
      return el;
    }
  });
};

const setRegexOutputFun = (state, action) => {
  state.output = action.payload;
};

const setRegexMatchesFun = (state, action) => {
  state.matches = action.payload;
};

const setRegexVariblesFun = (state, action) => {
  let variables = action.payload.map((el) => {
    if (el != null) {
      return el.map((innerel) => {
        return {
          id: nanoid(),
          content: innerel,
          alias: "",
          active: true,
        };
      });
    } else {
      return null;
    }
  });
  state.variables = variables;
};

const setRegexVariableStateFun = (state, action) => {
  state.variables = state.variables.map((e) => {
    if (e === null) {
      return null;
    } else {
      const elem = e.map((el) => {
        if (el.id == action.payload.id) {
          let newel = { ...el };
          newel.active = action.payload.state;
          return newel;
        } else {
          return el;
        }
      });
      return elem;
    }
  });
};

const setRegexVariableAliasFun = (state, action) => {
  state.variables = state.variables.map((group) => {
    if(group != null){
        const newGroup = group.map((v) => {
          if (v.id == action.payload.id) {
            let newV = { ...v };
            newV.alias = action.payload.alias;
            return newV;
          } else {
            return v;
          }
        });
        return newGroup;
    }else{
        return null;
    }
  });
};

const regexSlice = createSlice({
  name: "regex",
  initialState,
  reducers: {
    setRegexOutput: setRegexOutputFun,
    setRegexInput: setRegexInputFun,
    setRegexMatches: setRegexMatchesFun,
    setRegexVaribles: setRegexVariblesFun,
    removeRegexInput: removeRegexInputFun,
    updateRegexInput: updateRegexInputFun,
    setRegexVariableState: setRegexVariableStateFun,
    setRegexVariableAlias: setRegexVariableAliasFun,
    setDivider : setDividerFun
  },
});

export const {
  setRegexInput,
  setRegexOutput,
  setRegexMatches,
  setRegexVaribles,
  removeRegexInput,
  updateRegexInput,
  setRegexVariableState,
  setRegexVariableAlias,
  setDivider
} = regexSlice.actions;
export default regexSlice.reducer;
