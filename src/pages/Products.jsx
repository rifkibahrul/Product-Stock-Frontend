import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/Admin/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../features/authSlice";

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (isError) navigate("/");
    }, [isError, navigate]);
    
    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

export default Products;
