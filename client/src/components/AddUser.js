import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddUser = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassowrd] = useState("");
  const [Phone, setPhone] = useState("");
  const [Country, setCountry] = useState("");
  const [Image, setImage] = useState(null);
  const [errors, setErrors] = useState("");
  let history = useHistory();
  const handleFirstName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
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
    console.log(e.target.files[0].name);
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const save = (e) => {
    e.preventDefault();

    const fromData = new FormData();
    fromData.append("Name", Name);
    fromData.append("Email", Email);
    fromData.append("Password", Password);
    fromData.append("Phone", Phone);
    fromData.append("Country", Country);
    if (Image) {
      fromData.append("Image", Image, Image.name);
    }

    axios
      .post("register", fromData)
      .then((res) => {
        if (res.data.err) {
          setErrors(res.data.err);
        } else if (res.data.result) {
            props.getAllUser();
          setErrors(res.data.result);
          history.push("/");
        } else {
          setErrors(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className=" pt-3 pb-3">
        <div className="container" style={{ marginTop: "60px" }}>
          <div className="row  justify-content-md-center ">
            <div
              className="col-md-6 text-white bg-dark  pt-3 pb-3"
              style={{ "--bs-bg-opacity": "1.5;" }}
            >
              <div className="text-center pt-3 pb-3">
                <h4>
                  <strong className="text-info">Add User</strong>
                </h4>
              </div>

              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name..."
                  onChange={handleFirstName}
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Email</label>
                <input
                  type="Email"
                  className="form-control"
                  name="Email"
                  placeholder="Email..."
                  onChange={handleEmail}
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Password</label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
                  placeholder="Password..."
                  onChange={handlePassowrd}
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="Phone"
                  placeholder="Phone..."
                  onChange={handlePhone}
                />
              </div>
             
              <div className="pt-3 pb-3">
                <label className="col-form-label">Country:</label>
                <select
                  className="form-control"
                  name="Country"
                  onChange={handleCountry}
                >
                  <option name="Country" value="">
                    Open this select Country
                  </option>
                  <option value="Jordan">Jordan</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Iraq ">Iraq </option>
                  <option value="Syria">Syria </option>
                  <option value="Emirates">Emirates</option>
                  <option value="Qatar">Qatar</option>
                </select>
              </div>
              <div className="pt-3 pb-3">
                <label>Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="Image"
                  accept=".jpg,.png,.svg"
                  onChange={handleImage}
                />
              </div>
              <div className="text-center pt-3 pb-3">
                <button
                  type="submit"
                  className="btn btn-primary "
                  style={{ width: "100%" }}
                  onClick={save}
                >
                  Submit
                </button>
              </div>
              <div
                className="form-group"
                style={{ color: "red", textAlign: "center" }}
              >
                {errors.err && <p>{errors.err}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
