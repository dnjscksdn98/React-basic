import React, { useReducer, Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // state must be an object
  //   this.state = {
  //     counter: 0
  //   };
  // }

  // it could be declared without constructor
  state = {
    counter: 0
  };

  handleIncrease = () => {
    // setState: it only updates the value that is handled
    // if it updates an object, it must be immutable
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       // return state;
//       throw new Error("Unhandled action");
//   }
// }

// function Counter() {
//   // dispatch: 액션을 발생시키다
//   const [number, dispatch] = useReducer(reducer, 0);

//   // add events
//   const onIncrease = () => {
//     dispatch({
//       type: "INCREMENT"
//     });
//   };

//   const onDecrease = () => {
//     dispatch({
//       type: "DECREMENT"
//     });
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       {/* 이벤트 추가 */}
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;
