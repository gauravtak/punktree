import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
