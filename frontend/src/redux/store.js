import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./reducers/noteSlice";
import userSlice from "./reducers/userSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        note: noteSlice
    }
});

export default store