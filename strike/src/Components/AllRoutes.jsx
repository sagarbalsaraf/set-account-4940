import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignupCard from "../Pages/Signup";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupCard />} />
    </Routes>
  );
}
export default AllRoutes;
