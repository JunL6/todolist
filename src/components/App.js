import React from "react";
import InputBar from "./InputBar";
// import CustomTextInput from "./CustomTextInput";
import TodoList from "./TodoList";
import Tabs from "./Tabs";

const App = () => {
  return (
    <div>
      <div>TODO APP</div>
      <InputBar />
      {/* <CustomTextInput /> */}
      <div className="content">
        <Tabs />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
