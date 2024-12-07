import React, { useState, useEffect } from "react";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

const AddUsers = () => {
  const { id = 0 } = useParams();
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
    mobile1: "",
    mobile2: "",
    landline: "",
    email: "",
    dateOfBirth: "",
    bloodGroup: "",
    promoterName: "",
    promoterMobile: "",
    address: "",
    city: "",
    pincode: "",
    fileName: "",
    fileId: "",
    paymentMethod: "",
    // fileName: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState();
  const navigate = useNavigate();



  useEffect(() => {
    if (id) {
      // debugger;
      setIsLoading(true);
      console.log("Fetching user data for ID:", id); // Debugging
      let users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        users = users.filter((a) => a.id === parseInt(id));
        if (users.length) {
          const user = users[0];
          setUser(user);
          setUserId(parseInt(id));
          console.log("This is User by id ==>>> ", user);
          console.log("This is User id ==>>> ", userId);
        }
      }
    } else {
      setIsLoading(false);
    }
  }, [id]);


  const handleInputChange = (e) => {

    const { id, value, files } = e.target;
    if (id === "file") {
      let duplicateUser = user;
      duplicateUser.fileId = '';
      duplicateUser.fileName = '';
      setUser(user, duplicateUser);
      setTimeout(() => {
        setUser({ ...user, [id]: files[0] }); // Store the file
      }, 200);
    } else {
      setUser({ ...user, [id]: value });
    }
  };

  const saveUser = (userToSave) => {
    console.log('userToSave : ', userToSave);
    setUser(user, userToSave); // Store the file
    console.log("user", user);
    //Storing To Local DB STARTS
    let usersTable = [];
    if (localStorage.hasOwnProperty("users")) {
      usersTable = JSON.parse(localStorage.getItem("users"));
    }
    if (userToSave.id) {
      usersTable = usersTable.map((userItr) => {
        if (userItr.id == userToSave.id) {
          userItr = userToSave;
        }
        return userItr;
      });
    } else {
      const genratedUserId = Math.floor(Math.random() * 100000) + 25;
      userToSave.id = genratedUserId;
      setUser(user, userToSave);
      usersTable.push(user);
    }
    localStorage.setItem("users", JSON.stringify(usersTable));
    console.log("Form Save/Update successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user", user);

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      if (userId) {//When value is Non-zero
        console.log("Inside Update the record ==>> ");
        if (!user.fileId && user.file) {
          console.log("Uploading Image Again ==>> ")
          executeFileUploadAndSave(user.file);
        } else {
          let duplicateUser = user;
          saveUser(duplicateUser);
        }
      } else { //when value is zero
        console.log("Inside Save the record ==>> ");
        executeFileUploadAndSave(user.file);
        //navigate("/payment");

      }
    } else {
      setFormErrors(errors);
    }
    setFormErrors(validate(user));
  }; //Fn Closed


  const executeFileUploadAndSave = (file) => {
    if (file) {
      fileUploadAPI(file).then((response) => {
        console.log(response.data);
        const fileId = response.data.filename;
        getFileFromUploadCareCloudAPI(fileId).
          then((resp) => {
            console.log(resp.data);
            let duplicateUser = user;
            duplicateUser.fileId = resp.data.file_id;
            duplicateUser.fileName = resp.data.filename;
            saveUser(duplicateUser);
          })
          .catch((error) => {
            console.error("Something Went Wrong while File Upload We set File Id and FileName as Empty/OldState For Now...");
            saveUser(user);
          })
          ;
      });
    }
    // Upload File Ends
  };

  const fileUploadAPI = (file) => {
    console.log("File here ==>>> ", file);
    const url = "https://upload.uploadcare.com/base/";
    const formData = new FormData();
    formData.append("filename", file);
    formData.append("content-typ", "multipart/form-data");
    formData.append("UPLOADCARE_PUB_KEY", "ec69806f5ffa350e25bb");
    formData.append("UPLOADCARE_STORE", "auto");
    formData.append("metadata[subsystem]", "uploader");
    formData.append("metadata[pet]", "cat");
    return axios.post(url, formData);
  };

  const getFileFromUploadCareCloudAPI = (fileId) => {
    // https://upload.uploadcare.com/info?pub_key=ec69806f5ffa350e25bb&file_id=ad3e0cfa-534f-4802-939c-6a0cacf485bc
    const url = "https://upload.uploadcare.com/info/?pub_key=ec69806f5ffa350e25bb&file_id=" + fileId;
    return axios.get(url);
  };

  const validate = () => {
    const errors = {};
    if (!user.firstName) {
      errors.firstName = "The first name field is required";
    }
    if (!user.middleName) {
      errors.middleName = "The middle name field is required";
    }
    if (!user.lastName) {
      errors.lastName = "The first name field is required";
    }
    if (!user.username) {
      errors.username = "The  username field is required";
    }
    if (!user.password) {
      errors.password = "The password field is required";
    } else if (user.password.length < 8) {
      errors.password = "The password should be at least 8 characters";
    }
    if (!user.mobile1) {
      errors.mobile1 = "The mobile 1 field is required";
    } else if (user.mobile1.length < 10) {
      errors.mobile1 = "The mobile number must be 10 digit";
    }

    if (!user.email) {
      errors.email = "The email field is required";
    }
    if (!user.dateOfBirth) {
      errors.dateOfBirth = "The date of birth field is required";
    }
    if (!user.bloodGroup) {
      errors.bloodGroup = "The blood group field is required";
    }
    if (!user.promoterName) {
      errors.promoterName = "The promoter name field is required";
    }
    if (!user.promoterMobile) {
      errors.promoterMobile = "The promoter mobile no. field is required";
    } else if (user.promoterMobile.length < 10) {
      errors.promoterMobile = "The mobile number must be 10 digit";
    }
    if (!user.address) {
      errors.address = "The address field is required";
    }
    if (!user.city) {
      errors.city = "The city field is required";
    }
    if (!user.pincode) {
      errors.pincode = "The pincode field is required";
    }
    if (!user.paymentMethod) {
      errors.paymentMethod = "The payment method field is required";
    }
    return errors;
  };

  return (
    <div className="mar">
      <div className="container border-bottom bg-white py-3 px-5">
        {/* <h4>Add User</h4> */}
        {id ? "Update User" : "Add User"}
      </div>
      <div className="container border-bottom bg-white py-3 px-5">
        <form action="" onSubmit={handleSubmit} className="mt-4">
          <div>
            <div className="row">
              <div className="col-sm-4 mb-3">
                <label for="firstName" className="form-label fw-bold">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={user.firstName}
                  placeholder="Enter your first name"
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <small className="text-danger">{formErrors.firstName}</small>
                )}
              </div>
              <div className="col-sm-4 mb-3">
                <label for="middleName" className="form-label fw-bold">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  value={user.middleName}
                  placeholder="Enter your middle name"
                  onChange={handleInputChange}
                />
                {formErrors.middleName && (
                  <small className="text-danger">{formErrors.middleName}</small>
                )}
              </div>
              <div className="col-sm-4 mb-3">
                <label for="lastName" className="form-label fw-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={user.lastName}
                  placeholder="Enter your last name"
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <small className="text-danger">{formErrors.lastName}</small>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="row">
              <div className="col-sm-6 mb-3">
                <label for="username" className="form-label fw-bold">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={user.username}
                  placeholder="Enter your username name"
                  onChange={handleInputChange}
                />
                {formErrors.username && (
                  <small className="text-danger">{formErrors.username}</small>
                )}
              </div>
              <div className="col-sm-6 mb-3">
                <label for="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={user.password}
                  placeholder="Enter your password"
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <small className="text-danger">{formErrors.password}</small>
                )}
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4 mb-3">
              <label for="number" className="form-label fw-bold">
                Mobile No. 1
              </label>
              <input
                type="number"
                className="form-control"
                id="mobile1"
                value={user.mobile1}
                placeholder="Enter Mobile No. 1"
                onChange={handleInputChange}
              />
              {formErrors.mobile1 && (
                <small className="text-danger">{formErrors.mobile1}</small>
              )}
            </div>
            <div className="col-sm-4 mb-3">
              <label for="number" className="form-label fw-bold">
                Mobile No. 2
              </label>
              <input
                type="number"
                className="form-control"
                id="mobile2"
                value={user.mobile2}
                placeholder="Enter Mobile No. 2"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-sm-4 mb-3">
              <label for="number" className="form-label fw-bold">
                Landline No.
              </label>
              <input
                type="number"
                className="form-control"
                id="landline"
                value={user.landline}
                placeholder="Enter Landline No"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-4 mb-3">
              <label for="" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={user.email}
                placeholder="Enter Email ID"
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <small className="text-danger">{formErrors.email}</small>
              )}
            </div>

            <div className="col-sm-4 mb-3">
              <label for="date" className="form-label fw-bold">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dateOfBirth"
                value={user.dateOfBirth}
                placeholder="Select a date"
                onChange={handleInputChange}
              />
              {formErrors.dateOfBirth && (
                <small className="text-danger">{formErrors.dateOfBirth}</small>
              )}
            </div>
            <div className="col-sm-4 mb-3">
              <label for="bloodg" className="form-label fw-bold">
                Blood Group
              </label>
              <input
                type="bloodg"
                className="form-control"
                id="bloodGroup"
                value={user.bloodGroup}
                placeholder="Enter blood group"
                onChange={handleInputChange}
              />
              {formErrors.bloodGroup && (
                <small className="text-danger">{formErrors.bloodGroup}</small>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 mb-3">
              <label for="promoter" className="form-label fw-bold">
                Promoter Name
              </label>
              <input
                type="text"
                className="form-control"
                id="promoterName"
                value={user.promoterName}
                placeholder="Enter Promoter Name"
                onChange={handleInputChange}
              />
              {formErrors.promoterName && (
                <small className="text-danger">{formErrors.promoterName}</small>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <label for="promoter" className="form-label fw-bold">
                Promoter Mobile No.
              </label>
              <input
                type="number"
                className="form-control"
                id="promoterMobile"
                value={user.promoterMobile}
                placeholder="Enter Promoter Mobile No."
                onChange={handleInputChange}
              />
              {formErrors.promoterMobile && (
                <small className="text-danger">
                  {formErrors.promoterMobile}
                </small>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-12 mb-3">
              <label for="address" className="form-label fw-bold">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={user.address}
                placeholder=" Enter Address"
                onChange={handleInputChange}
              />
              {formErrors.address && (
                <small className="text-danger">{formErrors.address}</small>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 mb-3">
              <label for="city" className="form-label fw-bold">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={user.city}
                placeholder=" Enter City"
                onChange={handleInputChange}
              />
              {formErrors.city && (
                <small className="text-danger">{formErrors.city}</small>
              )}
            </div>
            <div className="col-sm-6 mb-3">
              <label for="pincode" className="form-label fw-bold">
                Pincode
              </label>
              <input
                type="number"
                className="form-control"
                id="pincode"
                value={user.pincode}
                placeholder=" Enter Pincode"
                onChange={handleInputChange}
              />
              {formErrors.pincode && (
                <small className="text-danger">{formErrors.pincode}</small>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 mb-3">
              <label for="photo" className="form-label fw-bold">
                Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                name="file"
                // value={user.file}
                onChange={handleInputChange} // Handle file selection
              />

              {/* <input
                type="file"
                className="form-control"
                id="customFile"
                value={user.photo}
                onChange={handleInputChange}
              /> */}
            </div>
            <div className="col-sm-6 mb-3">
              <label for="payment" className="form-label fw-bold">
                Payment Method
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="paymentMethod"
                value={user.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select payment mode
                </option>
                <option value="Credit card">Credit card</option>
              </select>
              {formErrors.paymentMethod && (
                <small className="text-danger">
                  {formErrors.paymentMethod}
                </small>
              )}
            </div>
          </div>
          <hr className="mt-3" />
          {/* <Link to="" className="btn btn-primary mt-5">
            Submit
          </Link> */}
          <button type="submit" button="true" className="btn btn-primary mt-5">
            {id ? "Update" : "Submit"}
          </button>
          {/* <button type="submit" className="btn btn-primary mt-5">
            {id ? "Update User" : "Add User"}
          </button> */}
          {/* <Link
            to="/home/users-info"
            type="submit"
            className="btn btn-primary mt-5"
          >
            Submit
          </Link> */}
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
