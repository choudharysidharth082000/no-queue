import { useState } from "react";
import React from "react";
import {Link} from "react-router-dom";
function StudentLogin() {
  const [studentLogin, setStudentLogin] = useState({
    rollno:"",
    phoneno:""

  })
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setStudentLogin({...studentLogin, [name]: value});
  }
  function validateForm() {
    return studentLogin.rollno.length === 11 && studentLogin.phoneno.length === 10;
  }
  const [records, setRecords] = useState([]);
  const handleSubmit = (event) =>{
    event.preventDefault();
    const newRecord = {...studentLogin, id: new Date().getTime().toString};
    setRecords([...records, newRecord]);
  }
  // const handleClick = () => {
  //   if(validateForm){
  //     console.log("hello World");
  //   }
    
  // }
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="rollno">Roll No</label>
                <input type="text" value={studentLogin.rollno} onChange={handleChange} name="rollno" id="rollno" />
            </div>
            <div>
                <label htmlFor="phoneno">Phone No</label>
                <input type="text" value={studentLogin.phoneno} onChange={handleChange} name="phoneno" id="phoneno" />
            </div>
            <Link to="/Home"><button type="submit"  disabled={!validateForm()}>LogIn</button></Link>
        </form>

    </div>
  );
}

export default StudentLogin;