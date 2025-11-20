
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface XPState {
  level: number;
  currentXP: number; // XP dentro do nível atual
  xpTotal: number; // XP acumulado total (opcional, útil para analytics)
}

const initialState: XPState = {
  level: 1,
  currentXP: 0,
  xpTotal: 0,
};

// Fórmula (Modelo B): XP required next = level^2 * 50
export function xpForNext(level: number) {
  return Math.max(1, level * level * 50);
}

const xpSlice = createSlice({
  name: "xp",
  initialState,
  reducers: {
    addXP: (state, action: PayloadAction<number>) => {
      const amount = action.payload;
      state.currentXP += amount;
      state.xpTotal += amount;

      // sobe de nível enquanto currentXP >= xpForNext(level)
      while (state.currentXP >= xpForNext(state.level)) {
        state.currentXP -= xpForNext(state.level);
        state.level += 1;
      }
    },

    setXPState: (state, action: PayloadAction<Partial<XPState>>) => {
      Object.assign(state, action.payload);
    },

    resetXPMonthly: () => initialState,
  },
});

export const { addXP, setXPState, resetXPMonthly } = xpSlice.actions;
export default xpSlice.reducer;
