import "./App.css";
import {useState} from "react"

function App() {
  const [textListItem, setTextListItem] = useState([
    "Item 1",
    "Item Dua",
    "Item San",
  ]);

  return (
    <div className="App">
      <>
          <h1>React TTS</h1>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2>Text List</h2>
          <ol>
            {textListItem.map((text, index) => {
              return <li key={index} style={{ textAlign: 'left'}}>{text}</li>;
            })}
          </ol>
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <input></input>
          <button>Send</button>
        </div>
      </>
    </div>
  );
}

export default App;
