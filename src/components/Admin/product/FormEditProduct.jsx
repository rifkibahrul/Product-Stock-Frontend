import React from "react";
import {
    IoBagHandleOutline,
    IoPricetagOutline 

} from "react-icons/io5";

const FormEditProduct = () => {
    return (
        <>
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl mb-4 font-semibold">Edit Product</h2>
            </div>

            <form className="max-w-md mx-auto">
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
                        />
                    </div>
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

export default FormEditProduct;
