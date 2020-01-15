import React, { createContext, useContext, useState } from "react";

// createContext: creating a context, param: default value
const MyContext = createContext("defaultValue");

function Child() {
  // useContext: return the context
  const text = useContext(MyContext);
  return <div>안녕하세요 {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    // Provider: sets the context - value
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
