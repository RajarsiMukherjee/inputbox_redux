import { ADD_INPUT_TEXT } from "./Action";

const initstate = {
  text_input: "",
};

export const reducer = (store = initstate, { type, payload }) => {
//   console.log(store);
  switch (type) {
    case ADD_INPUT_TEXT:
      return { ...store, text_input: payload };

    default:
      return store;
  }
};
