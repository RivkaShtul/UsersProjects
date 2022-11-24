import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "../../api/apiRequsts";
import { AppState, ProjectInfo, UserDetails } from "./types";

const login = createAsyncThunk(
    'app/loginUser',
    async (loginInfo: {
        // userName: string,
        email: string,
        password: string
    },
        { rejectWithValue }) => {
        // const { userName, password } = loginInfo;
        const { email, password } = loginInfo;
        try {
            // const response = await requestAPI.login({ userName, password });
            const response = await requestAPI.login({ email, password });
            return response.data as { token: string, userDetails: UserDetails }
        }
        catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    });

const getProjects = createAsyncThunk(
    'app/getProjects',
    async (token: string,
        { rejectWithValue }) => {
        try {
            const response = await requestAPI.getProjects(token);
            return response.data as ProjectInfo[];
        }
        catch (err: any) {
            return rejectWithValue(err.response.data)
        }
    });


export const asyncActions = {
    login,
    getProjects
}