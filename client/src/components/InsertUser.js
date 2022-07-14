import React from 'react'
import Navbar from './Navbar'
const InsertUser = () => {
  return (
    <div>
         <Navbar />
         <div className=" pt-3 pb-3">
        
        <div className="container"  style={{ marginTop: "60px" }}>
          <div className="row  justify-content-md-center ">
            <div className="col-md-6 text-white bg-dark  pt-3 pb-3" style={{"--bs-bg-opacity": "1.5;"}}>
              <div className="text-center pt-3 pb-3">
                <h4>
                  <strong className='text-info'>Add User</strong>
                </h4>
              </div>

              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name..."
                 
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Email</label>
                <input
                  type="Email"
                  className="form-control"
                  name="Email"
                  placeholder="Email..."
               
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Password</label>
                <input
                  type="Password"
                  className="form-control"
                  name="Password"
                  placeholder="Password..."
                
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="Phone"
                  placeholder="Phone..."
               
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="pt-3 pb-3">Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="Image"
                />
              </div>
              <div className="pt-3 pb-3">
                <label className="col-form-label">Country:</label>
                <select
                  className="form-control"
                  name="Country"
                >
                  <option value="Jordan">Jordan</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Iraq ">Iraq </option>
                  <option value="Syria">Syria </option>
                  <option value="Emirates">Emirates</option>
                  <option value="Qatar">Qatar</option>
                </select>
              </div>
              
              <div className="text-center pt-3 pb-3">
                <button
                  type="submit"
                  className="btn btn-primary "
                  style={{ width: "100%" }}
                
                >
                  Submit
                </button>
              </div>
             
            </div>
          </div>
        </div>
  
         </div>
    </div>
  )
}

export default InsertUser