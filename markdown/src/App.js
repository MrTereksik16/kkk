import React from "react";
import MDEditor from '@uiw/react-md-editor';
import {useState, useEffect} from "react"
import './App.css';


function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
    const BACK_URL = "http://localhost:3000"
    const [state, setState] = useState()
  
    useEffect(()=>{
  
      fetch(BACK_URL)
      .then((e)=>{
        return e.text()
      })
      .then((text)=>{
        console.log(text)
        setState(text)
      })
  
    },[])
  return (
    <div className="container">
      <MDEditor
        value={value}
        kek ={state}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}
export default App;
