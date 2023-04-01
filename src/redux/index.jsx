import React from "react";
import { Provider } from "react-redux";
import store from "../app/app";
import Counter from "./script/Counter";

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;