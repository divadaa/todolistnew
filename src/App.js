import { useState } from "react";
import "./Styles.css";
import Input from "./Input";
import Button from "./Button";
import Label from "./Itemlist";

function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (event) => setText(event.target.value);
  const handleAdd = () => {
    setList((list) => [...list, text]);
    setText("");
  };

  
    
  }

  return (
    <section>
      <div className="box">
        <Input text={text} change={handleChange} />
      </div>
      <div className="button-add">
        <Button onClick={handleAdd} text="ADD" />
      </div>
      <div className="button-clean">
        <Button onClick={() => setText("")} text="CLEAN" />
      </div>
      <div className="itemlist">
        <ul>
          {list.map((text, index) => {
            return (
              <li key={index}>
                <p>{text}</p>
                <Button onClick={() => setText("")} text="X" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );


export default App;
