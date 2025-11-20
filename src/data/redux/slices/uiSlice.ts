
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  xpToast: { amount: number; id: string } | null;
}

const initialState: UIState = {
  xpToast: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showXPToast: {
      reducer: (state, action: PayloadAction<{ amount: number; id: string }>) => {
        state.xpToast = action.payload;
      },
      prepare: (amount: number) => ({ payload: { amount, id: String(Date.now()) } }),
    },
    hideXPToast: (state) => {
      state.xpToast = null;
    },
  },
});

export const { showXPToast, hideXPToast } = uiSlice.actions;
export default uiSlice.reducer;
