import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import createPropertyReducer from "./property/create-property/createPropertySlice";

export const store = configureStore({
  reducer: {
    createProperty: createPropertyReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
