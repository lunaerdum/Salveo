import Login from "./views/login";
import Register from "./views/register"
import {Routes,Route} from "react-router-dom"

function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;