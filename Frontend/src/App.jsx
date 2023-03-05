import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { ReqAuth } from "./HOC/ReqAuth";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <ReqAuth>
              <Cart />
            </ReqAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
