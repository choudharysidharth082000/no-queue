import React from "react";
import LogIn from "./login/LogIn";
import StudentLogin from "./login/StudentLogin";
import OwnerLogin from "./login/OwnerLogin";
import {Route} from "react-router-dom";
import Home from "./Home";
import Amul from "./shops/Amul"
import Nescafe from "./shops/Nescafe"
import Canteen from "./shops/Canteen"
import ViewOrder from "./vieworder/ViewOrder"
import Cart from './Cart Page/Cart'
function App() {
  return (
    <div>
      <Route exact path="/owner" component={ViewOrder} />
      <Route exact path="/amul" component={Amul} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/Nescafe" component={Nescafe} />
      <Route exact path="/Canteen" component={Canteen} />
      <Route exact path="/" component={LogIn} />
      <Route exact path="/studentLogin" component={StudentLogin} />
      <Route exact path="/ownerLogin" component={OwnerLogin} />
      <Route exact path="/Home" component={Home} />


    </div>
  );
}

export default App;
