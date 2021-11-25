import "./styles.css";

function GenerateRandomNumber() {
  let x = Math.floor(Math.random() * 20 + 1);
  document.getElementById("num").innerHTML = x;
}

function Clear() {
  document.getElementById("num").innerHTML = "READY...";
}

export default function App() {
  return (
    <div className="App">
      <button type="button" onClick={GenerateRandomNumber}>
        GO!
      </button>
      &nbsp;&nbsp;
      <button type="button" onClick={Clear}>
        CLEAR
      </button>
    </div>
  );
}
