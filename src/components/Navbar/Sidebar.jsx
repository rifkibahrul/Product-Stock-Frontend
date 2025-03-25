import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
    return (
        <>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink
                                to={"/dashboard"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <IoHome />
                                <span className="ms-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/products"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <IoPricetag />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Products
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <IoLogOut />
                                <span className="ms-3 whitespace-nowrap">
                                    Logout
                                </span>
                            </button>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <NavLink
                                to={"/users"}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <IoPerson />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Users
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
