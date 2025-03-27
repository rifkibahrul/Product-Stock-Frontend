import React, { useEffect, useState } from "react";
import {
    IoMailOutline,
    IoLockClosedOutline,
    IoPersonCircleOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditUser = () => {
    // State product
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    // Menampilkan data sebelumnya
    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/users/${id}`
                );

                setName(response.data.data.name);
                setEmail(response.data.data.email);
                setRole(response.data.data.role);
            } catch (error) {
                if (error.response) setMsg(error.response.data.msg);
            }
        };

        getUserById();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(
                `http://localhost:5000/users/${id}`,
                {
                    name: name,
                    email: email,
                    password: password,
                    confPassword: confPassword,
                    role: role,
                }
            );

            // Ambil pesan success dari backend
            const succesMsg = response.data.msg;

            // Navigasi dan bawa pesan
            navigate("/users", { state: { msg: succesMsg } });
        } catch (error) {
            if (error.response) setMsg(error.response.data.msg);
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl mb-4 font-semibold">Add New Users</h2>
            </div>

            <form className="max-w-md mx-auto" onSubmit={updateUser}>
                {/* Alert */}
                {msg && (
                    <div
                        id="alert-error"
                        className="flex items-center p-4 mb-4 text-red-800 bg-red-50 rounded-lg dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                    >
                        <IoAlertCircleOutline className="w-5 h-5 shrink-0" />
                        <div className="ms-3 text-base font-medium">{msg}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-error"
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <IoCloseOutline size={20} />
                        </button>
                    </div>
                )}

                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoMailOutline size={20} />
                        </div>
                        <input
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@mail.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoLockClosedOutline size={20} />
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="confirm_password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoLockClosedOutline size={20} />
                        </div>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoPersonCircleOutline size={20} />
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Mugiyono"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="realtive z-0 w-full mb-5 group">
                    <label
                        htmlFor="role"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="" disabled>
                            -- Select --
                        </option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default FormEditUser;
