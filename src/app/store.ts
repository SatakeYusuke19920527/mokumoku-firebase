import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fetchReducer from '../features/fetchSlice';
export const store = configureStore({
    reducer: {
        fetch: fetchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;