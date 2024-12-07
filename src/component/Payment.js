// import React, { useState } from "react";
// import "./style.css";

// const Payment = () => {
//   const [showParagraph, setShowParagraph] = useState(false);

//   // Function to handle radio button change
//   const handleToggle = () => {
//     setShowParagraph(!showParagraph); // Toggle the paragraph visibility
//   };

//   return (
//     <>
//       <div className="form-container">
//         <div className="circle1 circle-top  d-none d-md-block"></div>
//         {/* Top circle */}
//         <div className="circle2 circle-bottom  d-none d-md-block"></div>
//         {/* Bottom circle */}
//         <div className="container h-100vh">
//           <div className="content">
//             <div className="row">
//               <div className="col-sm-9 bg-light mx-0">
//                 <h2>payments</h2>
//                 <p className="fs-4 mb-3">Choose your payment method</p>
//                 <hr />
//                 {/* collapse */}
//                 <div className="container mt-5">
//                   {/* Radio Button */}
//                   <div className="form-check">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id="toggleRadio"
//                       checked={showParagraph} // Reflect the current state
//                       onChange={handleToggle} // Toggle on change
//                     />
//                     <label className="form-check-label" htmlFor="toggleRadio">
//                       {showParagraph ? "Hide Paragraph" : "Show Paragraph"}
//                     </label>
//                   </div>

//                   {/* Paragraph (Visible based on state) */}
//                   {showParagraph && (
//                     <div className="mt-3">
//                       <p className="lead">
//                         This is the paragraph that is toggled on or off.
//                       </p>
//                     </div>
//                   )}
//                 </div>
//                 {/* collaps */}
//               </div>

//               <div className="col-sm-3">
//                 <h3>AANA BUSINESS</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import "./style.css";

const Payment = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showCards, setShowCards] = useState(false);

  // Function to handle toggle change
  const handleToggle = () => {
    setShowParagraph((prev) => !prev); // Toggle the paragraph visibility
  };
  const handleCardsToggle = () => {
    setShowCards((prev) => !prev); // Toggle the Cards visibility
  };

  return (
    <>
      <div className="form-container">
        <div className="circle1 circle-top d-none d-md-block"></div>
        {/* Top circle */}
        <div className="circle2 circle-bottom d-none d-md-block"></div>
        {/* Bottom circle */}
        <div className="container bg-light w-100">
          <div className="content">
            <div className="row w-100">
              {/* collaps */}
              <div className="col-sm-8 mx-0 px-4">
                <div className="mt-3 p-2">
                  <h2 className="mt-3">Payments</h2>
                  <p className="fs-4 mb-3">Choose your payment method</p>
                  <hr />
                  {/* Container for toggle */}
                  <div className="container mt-5 bgcls mb-5 p-3">
                    {/* Circular toggle for checkbox */}
                    <div className="form-check">
                      <input
                        type="checkbox" // Keeping it as checkbox for toggle functionality
                        className="form-check-input d-none" // Hide the actual checkbox
                        id="toggleCheckbox"
                        checked={showParagraph} // Reflect the current state
                        onChange={handleToggle} // Toggle on change
                      />
                      <label
                        className={`custom-toggle ${
                          showParagraph ? "checked" : ""
                        }`}
                        htmlFor="toggleCheckbox"
                      >
                        <span className="dot"></span>
                      </label>
                      <span className="ms-2 fs-5">
                        {showParagraph ? "Net Banking" : "Net Banking"}
                      </span>
                    </div>

                    {/* Paragraph (Visible based on state) */}
                    {showParagraph && (
                      <div className="mt-3 lead1">
                        <p className="">Select for popular banks</p>
                        <img
                          src="https://biz.aggrepaypayments.com/images/bank_logo_icons_new/DEMN.png"
                          alt=""
                          className="bg-white rounded mt-3 mb-5"
                        />
                        <div className="mb-5 fs-5">
                          <p>other banks</p>
                          <select
                            className="form-select mb-5"
                            aria-label="Default select example"
                          >
                            <option selected>Select your bank</option>
                            <option value="1">Net banking</option>
                            <option value="2">Demo</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* collaps */}
                  {/* Circular toggle for Cards */}
                  <div className="container mt-5 bgcls mb-5 p-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input d-none" // Hide the actual checkbox
                        id="toggleCheckboxCards"
                        checked={showCards} // Reflect the state for cards
                        onChange={handleCardsToggle} // Toggle for cards
                      />
                      <label
                        className={`custom-toggle ${
                          showCards ? "checked" : ""
                        }`}
                        htmlFor="toggleCheckboxCards"
                      >
                        <span className="dot"></span>
                      </label>
                      <span className="ms-2 fs-5">
                        {showCards ? "Cards" : "Cards"}
                      </span>
                    </div>

                    {/* Paragraph for Cards (Visible based on state) */}
                    {showCards && (
                      <div className="mt-3 lead1">
                        <img
                          src="https://biz.aggrepaypayments.com/basispay/images/cards.png"
                          alt=""
                          className="logo"
                        />
                        <div className="mb-3">
                          <div>
                            <label htmlFor="number">Card number</label>
                            <input
                              type="text"
                              className="form-control my-2 "
                              aria-label="Card Number"
                            />
                          </div>
                          <div>
                            <label htmlFor="name">Card holder name</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              aria-label="Holder name"
                            />
                          </div>
                          {/* expiry */}
                          <div className="row mt-4">
                            {/* Expiration Month */}
                            <div className="col-sm-4 mb-3">
                              <label className="form-label" htmlFor="expMonth">
                                Exp Month
                              </label>
                              <div className="input-group">
                                <select
                                  className="form-select"
                                  id="expMonth"
                                  aria-label="Select Month"
                                >
                                  <option selected>Select Month</option>
                                  {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  ))}
                                </select>
                                <span className="input-group-text">
                                  <i className="bi bi-chevron-up"></i>
                                </span>
                              </div>
                            </div>

                            {/* Expiration Year */}
                            <div className="col-sm-4 mb-3">
                              <label className="form-label" htmlFor="expYear">
                                Exp Year
                              </label>
                              <div className="input-group">
                                <select
                                  className="form-select"
                                  id="expYear"
                                  aria-label="Select Year"
                                >
                                  <option selected>Select Year</option>
                                  {Array.from({ length: 20 }, (_, i) => (
                                    <option
                                      key={i}
                                      value={new Date().getFullYear() + i}
                                    >
                                      {new Date().getFullYear() + i}
                                    </option>
                                  ))}
                                </select>
                                <span className="input-group-text">
                                  <i className="bi bi-chevron-up"></i>
                                </span>
                              </div>
                            </div>

                            {/* CVV */}
                            <div className="col-sm-4 mb-3">
                              <label className="form-label" htmlFor="cvv">
                                CVV
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="cvv"
                                maxLength="3"
                              />
                            </div>
                          </div>

                          {/* expiry */}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* other section */}
                </div>
              </div>
              {/* </div> */}

              <div className="col-sm-4 mx-0 mt-3">
                <div className="mt-3 p-3">
                  {/* <h3 className="mt-3">AANA BUSINESS</h3> */}
                  {/* <img
                    src="https://tnp-biz-bucket.s3.ap-south-1.amazonaws.com/logos/logo203911.PNG?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIL74MB7WMOML6K6Q%2F20241007%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241007T105718Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Signature=845362bfe2db3075cb40ebe67b6762a9823557163c5a1258395c4d45f3adeff1"
                    alt=""
                    className="imgana img-fluid"
                  /> */}
                  <div className="container image-container">
                    <img
                      src="https://tnp-biz-bucket.s3.ap-south-1.amazonaws.com/logos/logo203911.PNG?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIL74MB7WMOML6K6Q%2F20241007%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241007T105718Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Signature=845362bfe2db3075cb40ebe67b6762a9823557163c5a1258395c4d45f3adeff1"
                      alt="Logo"
                      className="imgana img-fluid"
                    />
                  </div>
                  <h6 className="mx-0 mb-5">AANA BUSINESS</h6>
                  <hr />
                  <div className="container mt-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="fs-5">Base Price</p>
                      </div>
                      <div class="col-sm-6 text-end">
                        <h5 className="fw-bold">₹ 100.00</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div className="col-sm-6">
                        <p className="fs-5">Technical Charges</p>
                      </div>
                      <div className="col-sm-6 text-end">
                        <h5 className="fw-bold">₹ 0</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="fs-5">GST</p>
                      </div>
                      <div className="col-sm-6 text-end">
                        <h5 className="fw-bold">₹ 0</h5>
                      </div>
                    </div>
                  </div>
                  <div className="mx-0">
                    <p className="fs-5">Total amount to be paid</p>
                    <h5 class="fw-bold fs-4">₹ 100.00</h5>
                    <h6 className="mt-3">Note :</h6>
                    <p>
                      After clicking on the ‘Pay Now’ button you might be taken
                      to your bank’s website for 3D secure authentication
                    </p>
                    <div className="bgbtn">
                      <button
                        type="button"
                        className="btn pay-now-btn btn-lg btn-block w-100 text-center pay-now-btn-fixed"
                      >
                        Pay Now
                      </button>
                      {/* <p className="after d-block d-md-none">
                        By clicking the button you agree to Proceed
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <footer>
                <div className="p-3">
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        src="https://biz.aggrepaypayments.com/images/white-label/aggrepaypayments/aggrepaypayments_logo.png"
                        alt=""
                        width={200}
                      />
                    </div>
                    <div className="col-sm-8">
                      <img
                        src="https://biz.aggrepaypayments.com/basispay/images/master_card.png"
                        alt=""
                        className="logos mx-4"
                      />
                      <img
                        src="https://biz.aggrepaypayments.com/basispay/images/pci.png"
                        alt=""
                      />
                      <img
                        src="https://biz.aggrepaypayments.com/basispay/images/rupay.png"
                        alt=""
                        className="logos"
                      />
                      <img
                        src="https://biz.aggrepaypayments.com/basispay/images/safekey.png"
                        alt=""
                        className="logos"
                      />
                      <img
                        src="https://biz.aggrepaypayments.com/basispay/images/visa.png"
                        alt=""
                        className="logos"
                      />
                    </div>
                  </div>
                </div>
              </footer>
              {/* footer */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
