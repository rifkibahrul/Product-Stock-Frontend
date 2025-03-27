import React, { useEffect } from "react";
import Layout from "../Layout";
import FormAddProduct from "../../components/Admin/product/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../features/authSlice";

const AddProduct = () => {
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
            <FormAddProduct />
        </Layout>
    );
};

export default AddProduct;
