import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import achievementsDataJson from "src/data/achievements/achievements.json";
import { calculateStreak } from "src/data/achievements/utils/streakUtils";
import { isNewMonth } from "src/data/achievements/utils/resetUtils";

const initialState = {
  xp: 0,
  streak: 0,
  checkins: [] as string[],
  earned: [] as string[],
  lastReset: new Date().toISOString()
};

const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    addCheckin: (state) => {
      const today = new Date().toISOString().split("T")[0];
      if (!state.checkins.includes(today)) state.checkins.push(today);

      state.streak = calculateStreak(state.checkins);
      state.xp += 10;
    },

    earnAchievement: (state, action: PayloadAction<string>) => {
      if (!state.earned.includes(action.payload)) {
        state.earned.push(action.payload);
        state.xp += 50;
      }
    },

    weeklyGoalAchieved: (state) => {
      state.xp += 30;
      state.earned.push("weekly_goal");
    },

    monthlyGoalAchieved: (state) => {
      state.xp += 100;
      state.earned.push("monthly_goal");
    },

    resetMonthly: (state) => {
      state.xp = 0;
      state.streak = 0;
      state.checkins = [];
      state.earned = [];
      state.lastReset = new Date().toISOString();
    },

    checkMonthlyReset: (state) => {
      if (isNewMonth(state.lastReset)) {
        state.xp = 0;
        state.streak = 0;
        state.checkins = [];
        state.earned = [];
        state.lastReset = new Date().toISOString();
      }
    }
  }
});

export const {
  addCheckin,
  earnAchievement,
  weeklyGoalAchieved,
  monthlyGoalAchieved,
  resetMonthly,
  checkMonthlyReset
} = achievementsSlice.actions;

export default achievementsSlice.reducer;
