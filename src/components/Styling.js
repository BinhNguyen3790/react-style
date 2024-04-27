import { Component } from "react";
import "./Styling.css";
import style from "./Styling.module.css";

class Styling extends Component {
  render() {
    const styleInline = {
      backgroundColor: "black",
      color: "white",
      padding: "2rem",
    };
    return (
      <div>
        <h1>style component</h1>
        <p className="txt">hello</p>
        <p className={style.txtModule}>hello</p>
        <p style={styleInline}>text style inline</p>
      </div>
    );
  }
}

export default Styling;
