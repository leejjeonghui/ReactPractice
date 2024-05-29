import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const count =0;
  return(
  <div>
    <h1>{count}</h1>
    <button onClick={()=>count+1}>증가</button>
  </div>
  );
}

export default App;
