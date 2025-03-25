import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Auth/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* General route */}
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>

                    {/* Route user */}
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/users/add" element={<AddUser />}></Route>
                    <Route path="/users/edit/:id" element={<EditUser />}></Route>

                    {/* Route product */}
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/add" element={<AddProduct />}></Route>
                    <Route path="/products/edit/:id" element={<EditProduct />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
