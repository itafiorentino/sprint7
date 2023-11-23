import { configureStore } from '@reduxjs/toolkit';
import shipsReducer from './slice/shipsSlice'


export const store = configureStore({
    reducer: {
        ships: shipsReducer
    }
});