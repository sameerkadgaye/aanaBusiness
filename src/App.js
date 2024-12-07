import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./component/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-datepicker/dist/react-datepicker.css";
import Home from "./component/Home";
// import Dashboard from "./component/Dashboard";
// import AddUsers from "./users/AddUsers";
import Payment from "./component/Payment";
import Users from "./component/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <SignIn /> */}
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/home/*" element={<Home />} />

          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
