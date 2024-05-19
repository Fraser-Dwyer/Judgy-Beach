import "./App.css";
import Login from "./Pages/Login.js";
import Layout from "./Components/Layout.js";
import Home from "./Pages/Home.js";
import Signup from "./Pages/Signup.js";
import PrivateRoute from "./Components/PrivateRoute.js";
import { Route, Routes } from "react-router-dom";

function App() {
  // Development: "http://localhost:8000"
  // Production: ""
  const baseURL = "http://localhost:8000";

  return (
    <Routes>
      <Route path="/" element={<Layout baseURL={baseURL} />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home baseURL={baseURL} />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login baseURL={baseURL} />} />
        <Route path="/signup" element={<Signup baseURL={baseURL} />} />
      </Route>
    </Routes>
  );
}

export default App;
