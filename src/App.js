import "./App.css";
import {useState} from "react"

function App() {
  const [textListItem, setTextListItem] = useState(["Item 1","Item 2","Item 3"]);
  const [inputValue, setInputValue] = useState("")

  const addItem = (newItem) => {
    setTextListItem([...textListItem, newItem])
  }

  const removeItem = (itemToRemove) => {
    setTextListItem(textListItem.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="App">
      <>
          <h1>React TTS</h1>

        <div className="Text-List">
          <h2>Text List</h2>
          <div className="List-items">
          <ol>
            {textListItem.map((text, index) => {
              return <li  onClick={() => removeItem(text)} key={index} style={{ textAlign: 'left'}}>{text}</li>;
            })}
          </ol>
          </div>
        </div>

        <div className="Input-box">
          <input onChange={(event) => setInputValue(event.target.value)} style={{width: "500"}}></input>
          <button onClick={() => addItem(inputValue)}>Send</button>
        </div>
      </>
    </div>
  );
}

export default App;
