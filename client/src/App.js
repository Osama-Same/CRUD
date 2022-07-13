import  React from "react";
import { Routes, Route } from "react-router-dom";
import GetAllUser from "./components/GetAllUser";
import UpdateUser from "./components/UpdateUser";
const App = () => {
  return (
  
      <Routes>
        <Route exact path="/" element={<GetAllUser/>}/>
        <Route path="/:idUser" element={<UpdateUser/>}/>
      </Routes>
  );
};

export default App;
