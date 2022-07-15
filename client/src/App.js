import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GetAllUser from "./components/GetAllUser";
import AddUser from "./components/AddUser";

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllUser();
  }, [user]);
  const getAllUser = () => {
    axios.get("GetAllUser").then((res) => {
      setUser(res.data);
      //console.log(res.data)
    });
  };
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Navbar />
          <GetAllUser user={user}/>
        </Route>
        <Route exact path={"/AddUser"}>
          <Navbar />
          <AddUser getAllUser={getAllUser()}/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
