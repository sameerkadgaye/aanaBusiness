import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineFolderCopy } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { TbSquares } from "react-icons/tb";

const Sidebar = ({ isOpen, handleMouseEnter, handleMouseLeave }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`d-flex flex-column sidebar bg-dark h-100 position-fixed ${
        isOpen ? "open" : ""
      }`}
      style={{
        top: 0, // Starts at the top of the viewport
        left: 0,
        width: isOpen ? "250px" : "80px",
        height: "100%", // Full viewport height
        zIndex: 1100, // Higher z-index to overlap the navbar
        transition: "width 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* svg */}
      <div className="bg-primary d-flex nav-link px-3  text-center fw-bold fs-5   text-white py-4">
        <div className="text-center mx-2">
          <svg
            className="brand-icon"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            width="30"
            height="33"
            viewBox="0 0 30 33"
          >
            <g fill="none" fillRule="evenodd">
              <path
                className="logo-fill-blue"
                fill="#7DBCFF"
                d="M0 4v25l8 4V0zM22 4v25l8 4V0z"
              ></path>
              <path
                className="logo-fill-white"
                fill="#FFF"
                d="M11 4v25l8 4V0z"
              ></path>
            </g>
          </svg>
        </div>

        <div className="px-2"> {isOpen && "Aana Business"}</div>
      </div>
      {/* svg */}
      <Link
        to="/home/dashboard"
        className="nav-link  fw-bold fs-6 fs  text-white py-4"
      >
        {/* <i className="bi bi-speedometer2"></i> */}
        <MdOutlineDashboard className="text-primary mx-3 fs" />
        {isOpen && "DASHBOARD"}
      </Link>
      <Link
        to="/home/users-info"
        className="nav-link  fw-bold fs-6 text-white py-4"
      >
        <MdOutlineFolderCopy className="fs mx-3" />{" "}
        {isOpen && <span className="tcol">USERS</span>}
      </Link>
      <Link
        to="/home/company-tree"
        className="nav-link fw-bold fs-6 py-4 text-white"
      >
        <FaChartPie className="fs mx-3" />
        {isOpen && <span className="tcol">COMPANY TREE</span>}
      </Link>
      {/* <Link
        to="/home/settlement"
        className="nav-link fs-6 fw-bold text-white py-4"
      >
        <TbSquares className="fs mx-3" />
        {isOpen && <span className="tcol">SETTELMENT</span>}
      </Link> */}

      <Link to="/home/set" className="nav-link fw-bold fs-6 py-4 text-white">
        <TbSquares className="fs mx-3" />
        {isOpen && <span className="tcol">SETTELMENT</span>}
      </Link>
    </div>
  );
};

export default Sidebar;
