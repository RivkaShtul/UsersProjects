import { createSlice } from "@reduxjs/toolkit";
import { ContainerState } from "./types";
import { asyncActions } from './asyncActions';

export const initialState: ContainerState = {
    token: '',
    userDetails: { 
        name: '',
        avatar:'',
        joinedAt: new Date(),
        teams:''
     },
     projectsInfo:[],
     serverErrorMessage: undefined
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        clearServerErrorMessage(state) {
            state.serverErrorMessage = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncActions.login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.userDetails.name = action.payload.userDetails.name;
            state.userDetails.teams = action.payload.userDetails.teams;
            state.userDetails.joinedAt = action.payload.userDetails.joinedAt;
            state.userDetails.avatar = action.payload.userDetails.avatar;
        });

        builder.addCase(asyncActions.login.rejected, (state, action) => {
            state.serverErrorMessage = action.payload ? `${action.payload}` : "unknown message";
        })

        builder.addCase(asyncActions.getProjects.fulfilled, (state, action) => {
            state.projectsInfo = action.payload;     
        });

        builder.addCase(asyncActions.getProjects.rejected, (state, action) => {
            state.serverErrorMessage = action.payload ? `${action.payload}` : "unknown message";
        })
    }
});

export const { actions, reducer, name: sliceKey } = appSlice;