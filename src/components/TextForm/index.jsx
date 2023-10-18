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
navigator.clipboard.writeText(text);
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
<div className='mobile-view'>
   <button disabled={text.length===0} className="button btn btn-primary mx-3" onClick={handleUpperCase}>Convert into UpperCase</button> 


<button disabled={text.length===0}  className="button btn btn-primary mx-3" onClick={handleLowerCase}>Convert into LowerCase</button> 


   <button disabled={text.length===0}  className="button btn btn-primary mx-3" onClick={handleReset}>Reset</button> 


    <button disabled={text.length===0} className="button btn btn-primary mx-3"  onClick={handleCopy}>Copy Text</button> 


    <button disabled={text.length===0} className="button btn btn-primary mx-3"  onClick={removeSpace}>Remove Extra Space</button> 

    </div>



<div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}} >
<h2>Your Text Summary</h2>
 {/* <p>Words are {text.split(" ").length} and Characters are {text.length}</p> */}
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
 <p>{text.trim().length} characters</p>
<p> {0.008 * text.trim().length} reading time in Minutes</p> 
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to Preview"}</p>
</div>
    </div>
  )
}
