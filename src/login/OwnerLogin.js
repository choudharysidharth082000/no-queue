import React,{useState} from "react";
import {Link} from "react-router-dom";
function OwnerLogin() {
  const owners = [{username:"amul",password:"amul123"},{username:"abc",password:"abc123"},{username:"canteen",password:"canteen123"} ];
  const [ownerLogin, setOwnerLogin] = useState({
    username:"",
    password:""
  });
  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setOwnerLogin({...ownerLogin, [name]:value});
  }
  function validateForm(){
    var i;
    for(i=0; i<owners.length; i++){
      if(owners[i].username === ownerLogin.username && owners[i].password === ownerLogin.password){
        return true;
      }
    }
    return false;
  }
  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" value={ownerLogin.username} onChange={handleChange} name="username" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" value={ownerLogin.password} onChange={handleChange} name="password" id="password" />
            </div>
            <Link to="/owner"><button type="submit" disabled={!validateForm()}>LogIn</button></Link>
        </form>

    </div>
  );
}

export default OwnerLogin;