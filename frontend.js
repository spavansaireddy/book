import React, { useState } from "react";
import './frontend.css'

function Data(){
    const UserName=[{title:"",author:"",isbn:""}]
    const [name,setName]=useState("")
    const Update=(e)=>{
        setName({[e.target.name]:e.target.value})
    }
    const display=()=>{
        alert("No bokks are added yet")
    }
  return(
    <>
      <div className="header">
        <b><h1>BookList Maintenance Form</h1>
        <p>Add and view your books using local storage</p></b>
      </div>
      <br/><br/><br/><br/><br/>
      <div className="form">
        <form onSubmit="submitform">
            Title <br/><input type="text" name="title" value={UserName.name} onChange={Update}/><br/>
            Author<br/><input type="text" name="author" value={UserName.title} onChange={Update}/><br/>
            ISBN# <br/><input type="text" name="isbn" value={UserName.isbn} onChange={Update}/><br/><br/>
            <button onClick={display}>Add</button>
        </form>
        <h1>{name.title}</h1>
        <h1>{name.author}</h1>
        <h1>{name.isbn}</h1>
      </div>
    </>
  )
}
export default Data