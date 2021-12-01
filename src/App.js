import "./styles.css";

let nums = [];

function GenerateRandomNumber() {
  let random = Math.floor(Math.random() * 44) + 1;

  if (!nums.includes(random)) {
    nums.push(random);
    return random;
  } else {
    if (nums.length < 44) {
      return GenerateRandomNumber();
    } else {
      return "NO MORE...";
    }
  }
}

function GetRandomNumber() {
  let num = GenerateRandomNumber();
  console.log(num);
  document.getElementById("num").innerHTML = num;
}

function Clear() {
  document.getElementById("num").innerHTML = "READY";
}

export default function App() {
  return (
    <div className="App">
      <button type="button" onClick={GetRandomNumber}>
        GO!
      </button>
      &nbsp;&nbsp;
      <button type="button" onClick={Clear}>
        CLEAR
      </button>
    </div>
  );
}
