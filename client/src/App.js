import axios from "axios";
import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllUser from "./components/GetAllUser";
import AddUser from "./components/AddUser";
import IdUser from "./components/IdUser";
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
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<GetAllUser  user={user}/>}/> 
      <Route path="/AddUser" element={<AddUser getAllUser={getAllUser}  user={user}/>}/> 
      <Route path="/IdUser/:idUser" element={<IdUser  user={user}/>}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
