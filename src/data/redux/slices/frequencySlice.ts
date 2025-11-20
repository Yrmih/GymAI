import { createSlice } from "@reduxjs/toolkit";

export interface FrequencyState {
  totalSessions: number;
  weeklySessions: number;
  dailySessions: Record<string, number>; 
  lastSessionDate: string | null;
}

const initialState: FrequencyState = {
  totalSessions: 0,
  weeklySessions: 0,
  dailySessions: {},
  lastSessionDate: null,
};

const frequencySlice = createSlice({
  name: "frequency",
  initialState,
  reducers: {
    registerSession: (state) => {
      const today = new Date().toISOString().split("T")[0];

      state.totalSessions++;
      if (!state.dailySessions[today]) state.dailySessions[today] = 1;
      else state.dailySessions[today]++;

      state.weeklySessions++;
      state.lastSessionDate = today;
    },

    resetWeekly: (state) => {
      state.weeklySessions = 0;
    },
  },
});

export const { registerSession, resetWeekly } = frequencySlice.actions;
export default frequencySlice.reducer;
