import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.js";
import Layout from "./Components/Layout.js";
import Home from "./Pages/Home.js";
import Signup from "./Pages/Signup.js";
import { UserContextProvider } from "./UserContext.js";

function App() {
  // Development: "http://localhost:8000"
  // Production: ""
  const baseURL = "http://localhost:8000";

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout baseURL={baseURL} />}>
          <Route index element={<Home baseURL={baseURL} />} />
          <Route path="/login" element={<Login baseURL={baseURL} />} />
          <Route path="/signup" element={<Signup baseURL={baseURL} />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
