import React, { useEffect, useState } from "react";
import {
    IoBagHandleOutline,
    IoPricetagOutline,
    IoAlertCircleOutline,
    IoCloseOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditProduct = () => {
    // State product
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    // Menampilkan data sebelumnya
    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/products/${id}`
                );

                setName(response.data.data.name);
                setPrice(response.data.data.price);
            } catch (error) {
                if (error.response) setMsg(error.response.data.msg);
            }
        };

        getProductById();
    }, [id]);

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(
                `http://localhost:5000/products/${id}`,
                {
                    name: name,
                    price: price,
                }
            );

            // Ambil pesan success dari backend
            const succesMsg = response.data.msg;

            // Navigasi dan bawa pesan
            navigate("/products", { state: { msg: succesMsg } });
        } catch (error) {
            if (error.response) setMsg(error.response.data.msg);
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl mb-4 font-semibold">Edit Product</h2>
            </div>

            <form className="max-w-md mx-auto" onSubmit={updateProduct}>
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
                        htmlFor="product_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Product Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoBagHandleOutline size={20} />
                        </div>
                        <input
                            type="text"
                            name="product_name"
                            id="product_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="product"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Price
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoPricetagOutline size={20} />
                        </div>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="price"
                            required
                            value={price}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update
                </button>
            </form>
        </>
    );
};

export default FormEditProduct;
