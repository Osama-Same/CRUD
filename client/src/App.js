import  React from "react";
import { Routes, Route } from "react-router-dom";
import GetAllUser from "./components/GetAllUser";
import UpdateUser from "./components/UpdateUser";
import InsertUser from "./components/InsertUser";
const App = () => {
  return (
  
      <Routes>
        <Route exact path="/" element={<GetAllUser/>}/>
        <Route path="/:idUser" element={<UpdateUser/>}/>
        <Route path="/AddUser" element={<InsertUser/>}/>
      </Routes>
  );
};

export default App;
