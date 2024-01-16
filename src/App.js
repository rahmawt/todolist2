import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "bulma/css/bulma.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Layout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
