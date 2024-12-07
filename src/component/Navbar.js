import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSearchOutline, IoDiamond, IoSettingsOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai"; // Clock Icon

// import { FaRegBell } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaUser, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-color fixed-top">
    //   <div className="navbar nav1">
    //     <div className="d-flex">
    //       <div className="d-flex">
    //         <div className="bg-light" onClick={toggleSidebar}>
    //           <HiOutlineMenuAlt2 className="fs bg-white" />
    //         </div>

    //         <div className="input-group">
    //           <span className="input-group-text  bg-white border border-0">
    //             <IoSearchOutline className="fs mx-3" />
    //           </span>
    //           <input
    //             type="text"
    //             className="border border-0  inputs"
    //             aria-label="Search"
    //           />
    //         </div>
    //       </div>

    //       {/* <IoSearchOutline /> */}

    //       <div id="navbarNav" className="ml-auto">
    //         <div className="navbar-nav ms-auto align-items-center">
    //           {/* <div className="position-relative">
    //           <CiBellOn className="fs fs-1" />
    //           <span className="position-absolute top-0 start-100 translate-middle p-2 border border-3 border-primary rounded-circle"></span>
    //         </div> */}

    //           {/* bell */}
    //           <div className="dropdown ms-auto">
    //             <div className="position-relative">
    //               <a
    //                 href="#"
    //                 id="notificationDropdown"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 <CiBellOn className="fs-1 fs" />
    //                 <span className="position-absolute top-0 start-100 translate-middle p-1  border border-3 border-primary rounded-circle">
    //                   {/* Notification Dot */}
    //                 </span>
    //               </a>

    //               {/* Dropdown Menu */}
    //               <ul
    //                 className="dropdown-menu dropdown-menu-end wid gap-2"
    //                 aria-labelledby="notificationDropdown"
    //                 style={{ width: "300px" }}
    //               >
    //                 <li>
    //                   <h5 className="dropdown-header text-center">
    //                     You have 5 Notifications
    //                   </h5>
    //                 </li>
    //                 <li>
    //                   <hr className="dropdown-divider" />
    //                 </li>
    //                 <li>
    //                   <div className="d-flex justify-content-between align-items-center px-3 py-2">
    //                     <div className="d-flex align-items-center">
    //                       <FaUserCheck className="me-2" />
    //                       <p className="mb-0">New Users Registered</p>
    //                     </div>
    //                     <div className="d-flex align-items-center text-muted">
    //                       <AiOutlineClockCircle className="me-1" />
    //                       <span>5 AM</span>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="d-flex justify-content-between align-items-center px-3 py-2">
    //                     <div className="d-flex align-items-center">
    //                       <FaUserCheck className="me-2" />
    //                       <p className="mb-0">New Users Registered</p>
    //                     </div>
    //                     <div className="d-flex align-items-center text-muted">
    //                       <AiOutlineClockCircle className="me-1" />
    //                       <span>4 AM</span>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="d-flex justify-content-between align-items-center px-3 py-2">
    //                     <div className="d-flex align-items-center">
    //                       <FaUserTimes className="me-2" />
    //                       <p className="mb-0">Users deleted</p>
    //                     </div>
    //                     <div className="d-flex align-items-center text-muted">
    //                       <AiOutlineClockCircle className="me-1" />
    //                       <span>1 AM</span>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="d-flex justify-content-between align-items-center px-3 py-2">
    //                     <div className="d-flex align-items-center">
    //                       <FaUserCheck className="me-2" />
    //                       <p className="mb-0">sales report is ready</p>
    //                     </div>
    //                     <div className="d-flex align-items-center text-muted">
    //                       <AiOutlineClockCircle className="me-1" />
    //                       <span>8 AM</span>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="d-flex justify-content-between align-items-center px-3 py-2">
    //                     <div className="d-flex align-items-center">
    //                       <FaUserCheck className="me-2" />
    //                       <p className="mb-0">New Users Registered</p>
    //                     </div>
    //                     <div className="d-flex align-items-center text-muted">
    //                       <AiOutlineClockCircle className="me-1" />
    //                       <span>6 AM</span>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <hr className="dropdown-divider" />
    //                 </li>
    //                 <li>
    //                   <a className="dropdown-item text-center" href="#">
    //                     View all notifications
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>

    //           {/* bell */}

    //           <div>
    //             <div className="btn-group">
    //               <button
    //                 type="button"
    //                 className="border-0 toggle1 dropdown-toggle mx-4"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 <img
    //                   src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
    //                   alt=""
    //                   className="imagetoggle"
    //                 />
    //                 Action
    //               </button>
    //               <ul className="dropdown-menu mt-3">
    //                 <li>
    //                   <Link className="dropdown-item" href="#">
    //                     Action
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <hr className="dropdown-divider" />
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item p-3" href="#">
    //                     <FaUser className="mx-3" />
    //                     My Profile
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item p-3" href="#">
    //                     <FaRegMessage className="mx-3" />
    //                     Message
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item p-3" href="#">
    //                     <IoDiamond className="mx-3" />
    //                     Projects
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item p-3" href="#">
    //                     <IoSettingsOutline className="mx-3" />
    //                     Account Setting
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <hr className="dropdown-divider" />
    //                 </li>
    //                 <li>
    //                   <Link to="/" className="dropdown-item" href="#">
    //                     <GrLogout className="mx-3" />
    //                     Log Out
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-color fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Section: Sidebar Toggle and Search */}
        <div className="d-flex align-items-center">
          {/* Sidebar Toggle */}
          <div className="bg-light me-5 navtag" onClick={toggleSidebar}>
            <HiOutlineMenuAlt2 className="fs bg-white" />
          </div>

          {/* Search Input */}
          <div className="input-group">
            <span className="input-group-text bg-white border-0">
              <IoSearchOutline className="fs mx-3" />
            </span>
            <input
              type="text"
              className="form-control border-0 inputs"
              placeholder=""
              aria-label="Search"
            />
          </div>
        </div>

        {/* Right Section: Notifications and Action */}
        <div className="d-flex align-items-center ms-auto">
          {/* Bell Icon */}
          <div className="dropdown position-relative me-4">
            <a
              href="#"
              id="notificationDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CiBellOn className="fs-1 fs" />
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-primary border border-3 rounded-circle"></span>
            </a>

            {/* Notifications Dropdown */}
            <ul
              className="dropdown-menu dropdown-menu-end wid gap-2"
              aria-labelledby="notificationDropdown"
              style={{ width: "300px" }}
            >
              <li>
                <h5 className="dropdown-header text-center">
                  You have 5 Notifications
                </h5>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {/* Notification Items */}
              <li>
                <div className="d-flex justify-content-between align-items-center px-3 py-2">
                  <div className="d-flex align-items-center">
                    <FaUserCheck className="me-2" />
                    <p className="mb-0">New Users Registered</p>
                  </div>
                  <div className="d-flex align-items-center text-muted">
                    <AiOutlineClockCircle className="me-1" />
                    <span>5 AM</span>
                  </div>
                </div>
              </li>
              {/* Additional Notification Items */}
              <li>
                <a className="dropdown-item text-center" href="#">
                  View all notifications
                </a>
              </li>
            </ul>
          </div>

          {/* Action Dropdown */}
          <div className="btn-group">
            <button
              type="button"
              className="btn border-0 dropdown-toggle mx-4"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt="User"
                className="rounded-circle imagetoggle"
                style={{ width: "40px", height: "40px" }}
              />
              Action
            </button>
            <ul className="dropdown-menu dropdown-menu-end mt-3">
              <li>
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item p-3" href="#">
                  <FaUser className="mx-3" />
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item p-3" href="#">
                  <FaRegMessage className="mx-3" />
                  Message
                </Link>
              </li>
              <li>
                <Link className="dropdown-item p-3" href="#">
                  <IoDiamond className="mx-3" />
                  Projects
                </Link>
              </li>
              <li>
                <Link className="dropdown-item p-3" href="#">
                  <IoSettingsOutline className="mx-3" />
                  Account Setting
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/" className="dropdown-item" href="#">
                  <GrLogout className="mx-3" />
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
