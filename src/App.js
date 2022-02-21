import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Form from "./components/Form/Form/Form";
import Home from "./components/Home/Home/Home";
import LocationDetails from "./components/Home/LocationDetails/LocationDetails";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<LocationDetails />} />
          <Route
            path="/booking/:locationDataId"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />

          <Route path="/form/*" element={<Form />} />
          {/* <Route path="/form/login" element={<Login/>} /> */}
          {/* <Route path="/form/signup" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
