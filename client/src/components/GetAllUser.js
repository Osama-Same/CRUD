import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateUser from "../components/UpdateUser";
const GetAllUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, [user]);
  const getAllUser = () => {
    axios.get("GetAllUser").then((res) => {
      setUser(res.data);
    });
  };

  const deleteUser = () => {
    axios.delete(`deleteUser/${user[0].idUser}`);
  };
  const data = user.map((e, i) => {
    return (
      <tbody>
        <tr>
          <th scope="row" key={i.idUser}>
            {e.idUser}
          </th>
          <td>
            <Link to={""}>{e.Name}</Link>
          </td>
          <td>{e.Email}</td>
          <td>{e.Password}</td>
          <td>{e.Phone}</td>
          <td>{e.Country}</td>
          <td>
            <img
              src={e.Image}
              className="img-circle"
              width={"100px"}
              height={"50px"}
              alt={e.Image}
            />
          </td>
          <td>
            <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
          </td>
          <td>
            <Link to={`/${e.idUser}`}>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Update
            </button>
            </Link>
            <UpdateUser getAllUser={getAllUser()} Name ={e.Name} Email = {e.Email} idUser={e.idUser}/>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="text-center pt-3 pb-3">
        <h2> Get All User </h2>
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col  pt-3 pb-3">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Country</th>
                  <th scope="col">Image</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              {data}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllUser;
