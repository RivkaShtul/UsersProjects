import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import { reducer as appReducer } from './app/store/slice'

// Create the store with logger middleware    
const logger = createLogger({
});
const middlewares = [logger, thunk];

const store = configureStore({
    reducer: {
        main: appReducer,
    },
    middleware: middlewares
});

export default store;