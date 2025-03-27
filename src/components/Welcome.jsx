import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div>
            <h1 className="text-5xl">Dashboard</h1>
            <h2 className="text-3xl">Welcome Back <strong>{user && user.name}</strong></h2>
        </div>
    );
};

export default Welcome;
