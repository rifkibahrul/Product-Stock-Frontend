/**
 * ! Yang dilakukan dalam kode dibawah
 * * 1. Menyimpan status auth pengguna di state Redux
 * * 2. Mengelola proses login secara asinkron
 * * 3. Menangani status request login
 * * 4. Mengembalikan state ke kondisi awal menggunakan reducer
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// inisial state
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const LoginUser = createAsyncThunk(
    "user/LoginUser",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: user.email,
                password: user.password,
            });

            return response.data;
        } catch (error) {
            if (error.response) {
                const message = error.response.data.msg;
                return thunkAPI.rejectWithValue(message);
            }
        }
    }
);

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:5000/me");

        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
    await axios.delete("http://localhost:5000/logout");
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        // Login user
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // Get user login
        builder.addCase(getUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
