import React, { useEffect } from "react";
import Layout from "./Layout";
import UserList from "../components/Admin/UserList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../features/authSlice";

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (isError) navigate("/");
        if (user && user.role !== "admin") navigate("/dashboard");
    }, [isError, user, navigate]);

    return (
        <Layout>
            <UserList />
        </Layout>
    );
};

export default Users;
