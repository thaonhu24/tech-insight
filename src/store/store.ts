import { configureStore } from "@reduxjs/toolkit";

import likeReducer from "./features/likeSlice";

export const store = configureStore({
  reducer: {
    like: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
