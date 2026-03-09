import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./features/bookmarkSlice";
import likeReducer from "./features/likeSlice";

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    like: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
