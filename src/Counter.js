import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      // return state;
      throw new Error("Unhandled action");
  }
}

function Counter() {
  // dispatch: 액션을 발생시키다
  const [number, dispatch] = useReducer(reducer, 0);

  // add events
  const onIncrease = () => {
    dispatch({
      type: "INCREMENT"
    });
  };

  const onDecrease = () => {
    dispatch({
      type: "DECREMENT"
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      {/* 이벤트 추가 */}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
