import React from "react";

async function Form() {
    const message= { value, text,name}
  const url = "https://ldn8-journey-server.glitch.me/";
  const data = await fetch (url
      {method:"POST",
      headers: {"content-Type": "application/json" },
      mode:"cors",
      body:
    
      }
  )
  

  

  return (
    <div className="theForm">
      <div>Form to go here</div>

      <select>
        <option value="HTML">HTML/CSS</option>
        <option value="JAVASCRIPT">JAVASCRIPT</option>
        <option value="REACT">REACT</option>
        <option value="NODE">NODE</option>
        <option value="SQL">SQL</option>
      </select>
      <textarea value ="from">..type your name here</textarea>
      <textarea value ="message" >Hello there,type your experience of your module here</textarea>
      <btn>Button</btn>
    </div>
  );
}

export default Form;
