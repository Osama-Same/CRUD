import React from "react";
import { Link } from "react-router-dom";
const GetAllUser = (props) => {
  const data = props.user.map((e, i) => {
    return (
      <tbody key={i}>
        <tr>
          <th scope="row">{e.idUser}</th>
          <td>
            <Link to={""}>{e.Name}</Link>
          </td>
          <td>{e.Email}</td>
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
            <button className="btn btn-danger">Delete</button>
          </td>
          <td>
            <Link to={`/updateUser/${e.idUser}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <div className=" pt-3 pb-3">
        <div className="container pt-3 pb-3">
          <div class="row justify-content-md-center">
            <div className="col"></div>
            <div className="col text-center">
              <h2> Get All User </h2>
            </div>
            <div className="col text-end">
              <Link to={"/AddUser"}>
                <button className="btn btn-primary">Add User</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "50px" }}>
        <div className="row justify-content-md-center pt-3 pb-3">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
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
    </div>
  );
};

export default GetAllUser;
