import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleInput1 = (event) => {
    setNum1(parseInt(event.target.value));
  };

  const handleInput2 = (event) => {
    setNum2(parseInt(event.target.value));
  };

  const handleValidate = (event, action) => {
    if (isNaN(num1) || isNaN(num2)) {
      setErrorMsg("Please enter a valid number");
      setError(true);
      return;
    } else if (!num1) {
      setErrorMsg("Error: Num1 cannot be empty");
      setError(true);
      return;
    } else if (!num2) {
      setErrorMsg("Error: Num2 cannot be empty");
      setError(true);
      return;
    } else {
      setError(false);
      setErrorMsg("");
      setSuccessMsg("Success: Your result is shown above!");
      handleOperation(action);
    }
  };

  const handleOperation = (action) => {
    switch (action) {
      case "+": {
        setResult(`Result = ${num1 + num2}`);
        break;
      }

      case "-": {
        setResult(`Result = ${num1 - num2}`);
        break;
      }

      case "*": {
        setResult(`Result = ${num1 * num2}`);
        break;
      }

      case "/": {
        setResult(`Result = ${num1 / num2}`);
        break;
      }
    }
  };

  return (
    <div className="App">
      {/* <Input /> */}

      {/* <Button /> */}

      <h2>React Calculator</h2>
      <input
        type="text"
        placeholder="Num1"
        onChange={handleInput1}
        value={num1}
      />
      <br />
      <input
        type="text"
        placeholder="Num2"
        onChange={handleInput2}
        value={num2}
      />

      <div id="buttons">

      <button
        onClick={(event) => {
          handleValidate(event, "+");
        }}
      >
        +
      </button>
      <button
        onClick={(event) => {
          handleValidate(event, "-");
        }}
      >
        -
      </button>
      <button
        onClick={(event) => {
          handleValidate(event, "*");
        }}
      >
        *
      </button>
      <button
        onClick={(event) => {
          handleValidate(event, "/");
        }}
      >
        /
      </button>
      </div>
      <p>{error ? "" : result}</p>
      <p className={error ? "error" : "success"}>
        {error ? errorMsg : successMsg}
      </p>
    </div>
  );
}

export default App;
