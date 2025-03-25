import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Sidebar from "../components/Navbar/Sidebar.jsx";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            {/* Navbar */}
            <Navbar />
            <Sidebar />
            {/* <div className="flex"> */}
                {/* Sidebar */}

                {/* Main content */}
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        <main>{children}</main>
                    </div>
                </div>
            {/* </div> */}
        </React.Fragment>
    );
};

export default Layout;
