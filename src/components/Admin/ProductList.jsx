import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    IoPencil,
    IoTrashOutline,
    IoSearch,
    IoAddOutline,
    IoCheckmarkCircle,
    IoCloseOutline,
} from "react-icons/io5";
import axios from "axios";

const ProductList = () => {
    // Simpan daftar produk ke dalam state lokal
    const [products, setProducts] = useState([]);

    // State pesan dari tambah data
    const location = useLocation();
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    // Ambil dfatar produk dari API dan disimpan ke state
    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data.data);
    };

    // Hapus produk berdasarkan UUID
    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/products/${productId}`
            );

            // Ambil pesan success dari backend
            setMsg(response.data.msg);

            // Refresh produk
            getProducts();

            // Hilangkan notifikasi setelah 3 detik
            setTimeout(() => setMsg(""), 5000);
        } catch (error) {
            if (error.response) setMsg(error.response.data.msg);
        }
    };

    // useEffect akan dijalankan pertama kali komopnen di render
    useEffect(() => {
        getProducts();
    }, []);

    // Menampilkan pesan
    useEffect(() => {
        if (location.state?.msg) {
            setMsg(location.state.msg);
            // setTimeout(() => setMsg(""), 3000);
            navigate(location.pathname, { replace: true }); // Hapus msg dari history
        }
    }, [location, navigate]);

    return (
        <section>
            <h1 className="text-5xl pb-5">Products</h1>
            <h2 className="text-2xl pb-2">List of Products</h2>

            {/* Table start */}
            <div className="mx-auto max-w-screen-xl px-4lg:px-12">
                {/* Alert */}
                {msg && (
                    <div
                        id="alert-3"
                        className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                        role="alert"
                    >
                        <IoCheckmarkCircle size={25} className="shrink-0" />
                        <span className="sr-only">Info</span>
                        <div className="ms-3 text-sm font-medium">{msg}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-error"
                            aria-label="Close"
                            onClick={() => setMsg("")}
                        >
                            <span className="sr-only">Close</span>
                            <IoCloseOutline size={20} />
                        </button>
                    </div>
                )}

                <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        {/* Search */}
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoSearch size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        id="search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryLogin-500 focus:border-primaryLogin-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryLogin-500 dark:focus:border-primaryLogin-500"
                                        placeholder="Search..."
                                        required=""
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Tombol tambah produk */}
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <Link
                                to="/products/Add"
                                className="flex items-center justify-center text-white bg-primaryLogin-700 hover:bg-primaryLogin-800 focus:ring-4 focus:ring-primaryLogin-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primaryLogin-600 dark:hover:bg-primaryLogin-700 focus:outline-none dark:focus:ring-primaryLogin-800"
                            >
                                <IoAddOutline size={18} className="mr-2" />
                                Add product
                            </Link>
                        </div>
                    </div>

                    {/* Table content */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Created By
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr
                                        className="border-b dark:border-gray-700"
                                        key={product.uuid}
                                    >
                                        <td className="px-4 py-3">
                                            {index + 1}
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {product.name}
                                        </th>
                                        <td className="px-4 py-3">
                                            {product.price}
                                        </td>
                                        <td className="px-4 py-3">
                                            {product.user.name}
                                        </td>
                                        <td className="px-4 py-3">
                                            <Link
                                                to={`/products/edit/${product.uuid}`}
                                                className="bg-blue-500 p-1 rounded text-white hover:bg-blue-700 inline-flex items-center justify-center"
                                            >
                                                <IoPencil size={20} />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteProduct(product.uuid)
                                                }
                                                className="ms-2 bg-red-500 p-1 rounded text-white hover:bg-red-700 inline-flex items-center justify-center"
                                            >
                                                <IoTrashOutline size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
