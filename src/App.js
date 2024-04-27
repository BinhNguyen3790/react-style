import Styling from "./components/Styling";
import style from "../src/components/Styling.module.css";

function App() {
  return (
    <div className="App">
      <h1>style project</h1>
      <Styling />
      <p className="txt">text app</p>
      <p className={style.txtModule}>text app22</p>
    </div>
  );
}

export default App;
