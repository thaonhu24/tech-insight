import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikeState {
  items: number[];
}

const initialState: LikeState = {
  items: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
