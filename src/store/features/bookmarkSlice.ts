import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookmarkState {
  items: number[];
}

const initialState: BookmarkState = {
  items: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
