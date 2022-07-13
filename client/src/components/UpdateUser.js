import React, { useState } from "react";
import axios from "axios";
const UpdateUser = (props) => {
  const [Name, setName] = useState(props.Name || "");
  const [Email, setEmail] = useState(props.Email || "");
  const [Password, setPassowrd] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const [Image, setImage] = useState(null);

  const handleFirstName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassowrd = (e) => {
    setPassowrd(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const fromData = await new FormData();
    fromData.append("Name", Name);
    fromData.append("Email", Email);
    fromData.append("Password", Password);
    fromData.append("Phone", Phone);
    fromData.append("Country", Country);
    if (Image) {
      fromData.append("Image", Image, Image.name);
    }
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .put(`UpdateIdUser/${props.idUser}`, fromData, config)
      .then((res) => {
        if (res.data.result) {
          props.getAllUser();
        } else {
          console.log(res.data.err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content text-white-50 bg-dark">
            <div className="modal-body text-white-50 bg-dark ">
              <div className="mb-3 text-center">
                <span className="text-center"> Update User</span>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  value={props.Name || ""}
                  onChange={handleFirstName}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email:</label>
                <input
                  type="Email"
                  className="form-control"
                  name="Email"
                  value={Email || ""}
                  onChange={handleEmail}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Password:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Passowrd"
                  value={Password || ""}
                  onChange={handlePassowrd}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  name="Phone"
                  value={Phone || ""}
                  onChange={handlePhone}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Image:</label>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control item"
                    accept=".jpg,.png,.svg"
                    id="Image"
                    name="Image"
                    multiple=""
                    onChange={handleImage}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Country:</label>
                <select
                  className="form-control"
                  name="Country"
                  onChange={handleCountry}
                >
                  <option value={Country || ""}>{Country}</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Iraq ">Iraq </option>
                  <option value="Syria">Syria </option>
                  <option value="Emirates">Emirates</option>
                  <option value="Qatar">Qatar</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateUser(props.idUser)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
