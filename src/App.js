import logo from './logo.svg';
import './App.css';
// alert("Outside alert");
function App() {
  let data = "Tushar Bansal";
  function clickFunc(){
    let data = "Tushar Kumar Bansal";
    alert(data);
  }
  return (
    <div className="App">
      <h1>
        {data}
      </h1>
      {/* <button onClick={clickFunc()}>click me</button> */}
      <button onClick={clickFunc}>click me</button>
      {/* <button onClick={alert("Hello")}>click me</button> */}
      {/* <button onClick={()=>alert("Hello")}>click me</button> */}
    </div>
  );
}

export default App;
