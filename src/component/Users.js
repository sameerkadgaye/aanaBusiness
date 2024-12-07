import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const onLoadUsers = [
  {
    "id": 451290,
    "firstName": "mayuri",
    "middleName": "ravindra",
    "lastName": "tichkule",
    "username": "Mayuri_Kadgaye",
    "password": "7777777777",
    "mobile1": "9090909090",
    "mobile2": "9090909090",
    "landline": "",
    "email": "mayuritichkule96@gmail.com",
    "dateOfBirth": "2024-12-10",
    "bloodGroup": "b+",
    "promoterName": "Anay",
    "promoterMobile": "9090909090",
    "address": "Ram Mandiir,Armori",
    "city": "Nagpur",
    "pincode": "441208",
    "fileName": "cartoon1.jpg",
    "fileId": "9b202473-a72d-4b73-b5e8-a6532e6ee489",
    "paymentMethod": "Credit card",
    "file": {}
  },
  {
    "firstName": "sameer",
    "middleName": "radheshyam",
    "lastName": "kadgaye",
    "username": "sameer@gmail.com",
    "password": "Abcd@123",
    "mobile1": "7845127845",
    "mobile2": "7845121245",
    "landline": "784512",
    "email": "sameer@gmail.com",
    "dateOfBirth": "2024-12-06",
    "bloodGroup": "b+",
    "promoterName": "abcd",
    "promoterMobile": "7845121245",
    "address": "xyz",
    "city": "Nagpur",
    "pincode": "441804",
    "fileName": "cartoon1.jpg",
    "fileId": "9b202473-a72d-4b73-b5e8-a6532e6ee489",
    "paymentMethod": "Credit card",
    "file": {},
    "id": 45128
  },
  {
    "firstName": "chetan",
    "middleName": "radheshyam",
    "lastName": "kadgaye",
    "username": "chetan@gmail.com",
    "password": "Abcd@123",
    "mobile1": "7845127845",
    "mobile2": "7845121245",
    "landline": "784512",
    "email": "chetan@gmail.com",
    "dateOfBirth": "2024-12-06",
    "bloodGroup": "b+",
    "promoterName": "abcd",
    "promoterMobile": "7845121245",
    "address": "xyz",
    "city": "Nagpur",
    "pincode": "441804",
    "fileName": "133525615477387968.jpg",
    "fileId": "1ef7437c-9f20-4549-8b9d-ab41a13eb511",
    "paymentMethod": "Credit card",
    "file": {},
    "id": 77197
  },
  {
    "firstName": "Puja",
    "middleName": "radheshyam",
    "lastName": "kadgaye",
    "username": "puja@gmail.com",
    "password": "Abcd@123",
    "mobile1": "7845127845",
    "mobile2": "7845121245",
    "landline": "784512",
    "email": "puja@gmail.com",
    "dateOfBirth": "2024-12-06",
    "bloodGroup": "b+",
    "promoterName": "abcd",
    "promoterMobile": "7845121245",
    "address": "xyz",
    "city": "Nagpur",
    "pincode": "441804",
    "fileName": "133525615477387968.jpg",
    "fileId": "1ef7437c-9f20-4549-8b9d-ab41a13eb511",
    "paymentMethod": "Credit card",
    "file": {},
    "id": 77197
  },
  {
    "firstName": "vikas",
    "middleName": "Bhagwan",
    "lastName": "yerne",
    "username": "Mayuri_Kadgaye",
    "password": "444444444444",
    "mobile1": "4444677777",
    "mobile2": "",
    "landline": "",
    "email": "admin@gmail.com",
    "dateOfBirth": "2024-12-09",
    "bloodGroup": "b+",
    "promoterName": "Anay",
    "promoterMobile": "4444677779",
    "address": "Ram Mandiir,Armori",
    "city": "Nagpur",
    "pincode": "441206",
    "fileName": "cartoon1.jpg",
    "fileId": "06284aef-9904-4e96-9e3c-7c2c23b7ba76",
    "paymentMethod": "Credit card",
    "file": {},
    "id": 69385
  },
  {
    "firstName": "Mona",
    "middleName": "ravindra",
    "lastName": "tichkule",
    "username": "Mayuri_Kadgaye",
    "password": "33333333333",
    "mobile1": "9090909088",
    "mobile2": "",
    "landline": "",
    "email": "mina@gmail.com",
    "dateOfBirth": "2024-12-12",
    "bloodGroup": "b",
    "promoterName": "Bhagwan",
    "promoterMobile": "9090909090",
    "address": "Ram Mandiir,Armori",
    "city": "Nagpur",
    "pincode": "441206",
    "fileName": "133525615477387968.jpg",
    "fileId": "51c29730-2280-4332-b924-76eec0e43f71",
    "paymentMethod": "Credit card",
    "file": {},
    "id": 43249
  }
];

const Users = () => {
  const [userData, setUserdata] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    //New Code below :
    if (localStorage.hasOwnProperty("users")) {
      const users = JSON.parse(localStorage.getItem("users"));
      // console.log("Inside If 344");
      setUserdata(users);
    } else {
      // console.log("Inside Else 344");
      if (onLoadUsers.length) {
        setUserdata(onLoadUsers);
        localStorage.setItem("users", JSON.stringify(onLoadUsers));
      }
    }
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        let usersTable = JSON.parse(localStorage.getItem("users"));
        if (usersTable && usersTable.length) {
          let userToDelete = usersTable.filter((a) => a.id !== id);
          if (userToDelete.length) {
            console.log(userToDelete);
            localStorage.setItem("users", JSON.stringify(userToDelete));
            alert("User deleted successfully!");
          } else {
            alert("Failed to delete user!");
          }
        }
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // Filter the data based on search input
  const filteredData = userData.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  // Define columns for the DataTable
  const columns = [
    {
      name: "Sr. No",
      selector: (row, id) => id + 1,
      sortable: false,
      width: "80px",
    },
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Middle Name", selector: (row) => row.middleName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Username", selector: (row) => row.username, sortable: true },
    { name: "Password", selector: (row) => row.password, sortable: true },
    { name: "Mobile No.1", selector: (row) => row.mobile1, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    {
      name: "Date of birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    { name: "Blood Group", selector: (row) => row.bloodGroup, sortable: true },
    {
      name: "Promoter Name",
      selector: (row) => row.promoterName,
      sortable: true,
    },
    {
      name: "Promoter mobile No.",
      selector: (row) => row.promoterMobile,
      sortable: true,
    },
    { name: "Address", selector: (row) => row.address, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "Pincode", selector: (row) => row.pincode, sortable: true },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
      sortable: true,
    },
    {
      name: "File",
      cell: (row) => (
        <img
          src={`https://ucarecdn.com/${row.fileId}/${row.fileName}`}
          alt=""
          style={{
            width: "30px",
            height: "30px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex">
          <Link
            to={`/home/addusers/${row.id}`}
            className="btn btn-sm btn-primary me-1"
          >
            <FaEdit />
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(row.id)}
          >
            <MdDelete />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="mar">
      <div className="container bg-white p-2">
        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
          <div>
            <h3>Users List</h3>
          </div>
          <div>
            <Link to={`/home/addusers`} className="btn btn-primary">
              Add Users
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-end mb-3">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search Users"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <DataTable
          title=""
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          striped
          keyField="id"
          responsive
        />
      </div>
    </div>
  );
};

export default Users;
