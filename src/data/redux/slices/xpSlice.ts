import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface XPState {
  level: number;
  currentXP: number;
  nextXP: number;
}

const initialState: XPState = {
  level: 1,
  currentXP: 0,
  nextXP: 100, // XP necessário pra upar do nível 1 para o 2
};

const xpSlice = createSlice({
  name: "xp",
  initialState,
  reducers: {
    addXP: (state, action: PayloadAction<number>) => {
      state.currentXP += action.payload;

      // Se passou do necessário, aumenta o level automaticamente
      while (state.currentXP >= state.nextXP) {
        state.currentXP -= state.nextXP;
        state.level += 1;

        // Fórmula do XP do próximo nível (pode ajustar depois)
        state.nextXP = Math.floor(state.nextXP * 1.25);
      }
    },

    resetXP: () => initialState,
  },
});

export const { addXP, resetXP } = xpSlice.actions;
export default xpSlice.reducer;
