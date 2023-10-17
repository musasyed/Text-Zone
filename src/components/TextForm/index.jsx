import React, {useState } from 'react'
import "./style.css"

export default function TextForm(props) {

const[text,setText]=useState('');


const handleText=(e)=>{
    setText(e.target.value);
    // console.log(text)
}
const handleUpperCase=()=>{
    // console.log("Clicked")
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert( "success"," Converted to UpperCase")
}
const handleLowerCase=()=>{
    // console.log("Clicked")
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert( "success"," Converted to LowerCase")
}

const handleReset=()=>{
    setText("")
    props.showalert( "success","  reset")
}

const handleCopy=()=>{
let text=document.getElementById("box-area")
text.select();
navigator.clipboard.writeText(text.value);
props.showalert( "success"," Copied to Clipboard!")
}

const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert( "success"," Extra Spaces Removed!")
  };

  return (
    <div>

<div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text}  style={{backgroundColor:props.mode==='light'?'light':'light'}} id="box-area" onChange={handleText} rows="8"></textarea>
</div>

   <button className="button btn btn-primary" onClick={handleUpperCase}>Convert into UpperCase</button> 


<button className="button btn btn-primary mx-3" onClick={handleLowerCase}>Convert into LowerCase</button> 


   <button className="button btn btn-primary mx-3" onClick={handleReset}>Reset</button> 


    <button className="button btn btn-primary mx-3"  onClick={handleCopy}>Copy Text</button> 


    <button className="button btn btn-primary mx-3"  onClick={removeSpace}>Remove Extra Space</button> 





<div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}} >
<h2>Your Text Summary</h2>
 {/* <p>Words are {text.split(" ").length} and Characters are {text.length}</p> */}
<p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words</p>
 <p>{text.trim().length} characters</p>
<p> {0.008 * text.trim().length} reading time in Minutes</p> 
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to above textbox to preview it"}</p>
</div>
    </div>
  )
}
