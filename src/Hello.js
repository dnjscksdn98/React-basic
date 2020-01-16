import React, { Component } from "react";

// class component
class Hello extends Component {
  // class component - default props
  static defaultProps = {
    name: "no-name"
  };

  render() {
    const { color, isSpecial, name } = this.props;

    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// // function component
// function Hello({ color, name, isSpecial }) {
//     return (
//         <div style={{ color }}>
//             {/* {isSpecial ? <b>*</b> : null} */}
//             {isSpecial && <b>*</b>}
//             안녕하세요 {name}
//         </div>
//     );
// }

// // function component - default props
// Hello.defaultProps = {
//   name: "javascript"
// };

export default Hello;
