import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FrequencyState {
  totalSessions: number;
  weeklySessions: number;
  dailySessions: Record<string, number>;
  lastSessionDate: string | null;
  weeklyGoal: number; // nova meta semanal
}

const initialState: FrequencyState = {
  totalSessions: 0,
  weeklySessions: 0,
  dailySessions: {},
  lastSessionDate: null,
  weeklyGoal: 3, // padrão 3x por semana
};

const frequencySlice = createSlice({
  name: "frequency",
  initialState,
  reducers: {
    registerSession: (state) => {
      const today = new Date().toISOString().split("T")[0];

      state.totalSessions++;
      state.dailySessions[today] = (state.dailySessions[today] || 0) + 1;
      state.weeklySessions++;
      state.lastSessionDate = today;
    },

    resetWeekly: (state) => {
      state.weeklySessions = 0;
    },

    setWeeklyGoal: (state, action: PayloadAction<number>) => {
      state.weeklyGoal = action.payload;
    },
  },
});

export const { registerSession, resetWeekly, setWeeklyGoal } = frequencySlice.actions;
export default frequencySlice.reducer;
