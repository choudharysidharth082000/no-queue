import React from "react";
import {Link} from "react-router-dom";
function LogIn() {
  return (
    <div>
       
      <Link to="/studentLogin" ><button>Students</button></Link>
      <Link to="/ownerLogin" ><button>Owner</button></Link>

    </div>
  );
}

export default LogIn;