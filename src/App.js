import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Product from "./pages/product";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/register";
//Setup Routes
function App() {
  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/products/:productID" element={<Product/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/dashboard" 
  element={<ProtectedRoute>
    <Dashboard/>
    </ProtectedRoute>}/>
  <Route path="*" element={<h1>Page Not Found</h1>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
