import Login from "./views/login";
import Register from "./views/register";
import Dashboard from "./views/dashboard";
import Error from "./views/error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
      <Route path="/index" element={<Dashboard />} />
      <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;