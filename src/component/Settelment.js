// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SettelmentList from "./SettelmentList";
// import axios from "axios";

// const Settelment = () => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");

//   const handleGenerate = () => {
//     if (selectedMonth && selectedYear) {
//       alert(`Selected Month: ${selectedMonth}\nSelected Year: ${selectedYear}`);
//     } else {
//       alert("Please select both a month and a year.");
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       month: selectedMonth,
//       year: selectedYear,
//     };

//     axios
//       .post("http://localhost:8084/addpayment", data) // Replace the URL with your endpoint
//       .then((response) => {
//         console.log("Data submitted successfully:", response.data);
//         alert("Payment record added successfully!");
//       })
//       .catch((error) => {
//         console.error("Error submitting data:", error);
//         alert("Failed to submit payment record.");
//       });
//   };

//   return (
//     <>
//       <div className="card mar">
//         <div className="p-3">
//           <h4>Generate Settlement</h4>
//         </div>
//         <div className="d-flex mt-2 pb-3">
//           <form className="d-flex gap-3" onSubmit={handleSubmit}>
//             {/* Month Selector */}

//             <select
//               className="form-select m-2"
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Month
//               </option>
//               {months.map((month, index) => (
//                 <option key={index} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>

//             {/* Year Selector */}
//             <select
//               className="form-select m-2"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Year
//               </option>
//               {years.map((year, index) => (
//                 <option key={index} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>

//             {/* Generate Button */}
//             <button
//               type="button"
//               className="btn btn-primary m-2"
//               onClick={handleGenerate}
//             >
//               Generate
//             </button>
//           </form>
//         </div>
//       </div>
//       <SettelmentList />
//     </>
//   );
// };

// export default Settelment;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SettelmentList from "./SettelmentList";

// const Settelment = () => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");

//   const handleGenerate = () => {
//     if (selectedMonth && selectedYear) {
//       alert(`Selected Month: ${selectedMonth}\nSelected Year: ${selectedYear}`);
//     } else {
//       alert("Please select both a month and a year.");
//     }
//   };

//   return (
//     <>
//       <div className="card mar">
//         <div className="p-3">
//           <h4>Generate Settlement</h4>
//         </div>
//         <div className="d-flex mt-2 pb-3">
//           <form className="d-flex gap-3">
//             {/* Month Selector */}
//             <select
//               className="form-select m-2"
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Month
//               </option>
//               {months.map((month, index) => (
//                 <option key={index} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>

//             {/* Year Selector */}
//             <select
//               className="form-select m-2"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Year
//               </option>
//               {years.map((year, index) => (
//                 <option key={index} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>

//             {/* Generate Button */}
//             <button
//               type="button"
//               className="btn btn-primary m-2"
//               onClick={handleGenerate}
//             >
//               Generate
//             </button>
//           </form>
//         </div>
//       </div>
//       <SettelmentList month={selectedMonth} year={selectedYear} />
//     </>
//   );
// };

// export default Settelment;

// scrach
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SettelmentList from "./SettelmentList";
// import axios from "axios";

// const Settelment = () => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");

//   const handleGenerate = () => {
//     if (selectedMonth && selectedYear) {
//       alert(`Selected Month: ${selectedMonth}\nSelected Year: ${selectedYear}`);
//     } else {
//       alert("Please select both a month and a year.");
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       month: selectedMonth,
//       year: selectedYear,
//     };

//     axios
//       .post("http://localhost:8084/addpayment", data) // Replace the URL with your endpoint
//       .then((response) => {
//         console.log("Data submitted successfully:", response.data);
//         alert("Payment record added successfully!");
//       })
//       .catch((error) => {
//         console.error("Error submitting data:", error);
//         alert("Failed to submit payment record.");
//       });
//   };

//   return (
//     <>
//       <div className="card mar">
//         <div className="p-3">
//           <h4>Generate Settlement</h4>
//         </div>
//         <div className="d-flex mt-2 pb-3">
//           <form className="d-flex gap-3" onSubmit={handleSubmit}>
//             {/* Month Selector */}

//             <select
//               className="form-select m-2"
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Month
//               </option>
//               {months.map((month, index) => (
//                 <option key={index} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>

//             {/* Year Selector */}
//             <select
//               className="form-select m-2"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Year
//               </option>
//               {years.map((year, index) => (
//                 <option key={index} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>

//             {/* Generate Button */}
//             <button
//               type="button"
//               className="btn btn-primary m-2"
//               onClick={handleGenerate}
//             >
//               Generate
//             </button>
//           </form>
//         </div>
//       </div>
//       <SettelmentList />
//     </>
//   );
// };

// export default Settelment;

// new code
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SettelmentList from "./SettelmentList";
import axios from "axios";

const Settlement = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [dataTable, setDataTable] = useState([]);

  // submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedMonth || !selectedYear) {
      alert("Please select both a month and a year.");
      return;
    }

    const data = {
      month: selectedMonth,
      year: selectedYear,
    };

    try {
      const response = await axios.post(
        "http://localhost:8084/addpayment",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Data submitted successfully:", response.data);
      alert("Payment record added successfully!");

      setDataTable((prevData) => [...prevData, data]);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit payment record.");
    }
  };

  // Function to handle the Generate button click
  // const handleGenerate = () => {
  //   if (selectedMonth && selectedYear) {
  //     // Add the data to the dataTable without showing an alert
  //     setDataTable((prevData) => [
  //       ...prevData,
  //       { month: selectedMonth, year: selectedYear },
  //     ]);
  //   } else {
  //     alert("Please select both a month and a year.");
  //   }
  // };

  return (
    <>
      <div className="card mar">
        <div className="p-3">
          <h4>Generate Settlement</h4>
        </div>
        <div className="d-flex mt-2 pb-3">
          <form className="d-flex gap-3" onSubmit={handleSubmit}>
            {/* Month Selector */}
            <select
              className="form-select m-2"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="" disabled>
                Select Month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* Year Selector */}
            <select
              className="form-select m-2"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled>
                Select Year
              </option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* Generate Button */}
            {/* <button
              type="button"
              className="btn btn-primary m-2"
              onClick={handleGenerate}
            >
              Generate
            </button> */}
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary m-2">
              Generate
            </button>
          </form>
        </div>
      </div>
      {/* Pass the dataTable to SettelmentList to display the data */}
      <SettelmentList />
    </>
  );
};

export default Settlement;
