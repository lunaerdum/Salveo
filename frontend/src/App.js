import Login from "./views/login";
import Register from "./views/register";
import Index from "./views/index";
import Error from "./views/error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;