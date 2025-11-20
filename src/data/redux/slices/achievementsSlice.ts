// src/data/redux/slices/achievementsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateStreak } from "src/data/achievements/utils/streakUtils";
import { isNewMonth } from "src/data/achievements/utils/resetUtils";

// XP amounts for actions (coerente com o que definimos)
const XP_FOR_CHECKIN = 10; // cada uso da câmera = checkin
const XP_FOR_WEEKLY_GOAL = 30;
const XP_FOR_MONTHLY_GOAL = 100;

// XP por tipo de conquista (se usar earnAchievement with meta.type)
const XP_BY_TYPE: Record<string, number> = {
  unique: 80,
  monthly: 50,
  daily: 20,
  weekly: 30,
  generic: 50,
};

export interface AchievementsState {
  xpLocal: number; // opcional, mantemos histórico local também
  streak: number;
  checkins: string[]; // array de datas "YYYY-MM-DD"
  earned: string[]; // ids
  lastReset: string;
}

const initialState: AchievementsState = {
  xpLocal: 0,
  streak: 0,
  checkins: [],
  earned: [],
  lastReset: new Date().toISOString(),
};

const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    // registra checkin localmente (usar middleware para dar XP global via xpSlice)
    addCheckinLocal: (state) => {
      const today = new Date().toISOString().split("T")[0];
      if (!state.checkins.includes(today)) {
        state.checkins.push(today);
        state.streak = calculateStreak(state.checkins);
        state.xpLocal += XP_FOR_CHECKIN;
      }
    },

    // desbloquear conquista (prepare aceita tipo)
    earnAchievementLocal: {
      reducer: (state, action: PayloadAction<string>) => {
        if (!state.earned.includes(action.payload)) {
          state.earned.push(action.payload);
        }
      },
      prepare: (id: string, type: string = "generic") => ({ payload: id, meta: { type } }),
    },

    weeklyGoalAchievedLocal: (state) => {
      if (!state.earned.includes("weekly_goal")) {
        state.earned.push("weekly_goal");
        state.xpLocal += XP_FOR_WEEKLY_GOAL;
      }
    },

    monthlyGoalAchievedLocal: (state) => {
      if (!state.earned.includes("monthly_goal")) {
        state.earned.push("monthly_goal");
        state.xpLocal += XP_FOR_MONTHLY_GOAL;
      }
    },

    resetMonthlyLocal: (state) => {
      state.xpLocal = 0;
      state.streak = 0;
      state.checkins = [];
      state.earned = [];
      state.lastReset = new Date().toISOString();
    },

    checkMonthlyResetLocal: (state) => {
      if (isNewMonth(state.lastReset)) {
        state.xpLocal = 0;
        state.streak = 0;
        state.checkins = [];
        state.earned = [];
        state.lastReset = new Date().toISOString();
      }
    },
  },
});

export const {
  addCheckinLocal,
  earnAchievementLocal,
  weeklyGoalAchievedLocal,
  monthlyGoalAchievedLocal,
  resetMonthlyLocal,
  checkMonthlyResetLocal,
} = achievementsSlice.actions;

// Middleware: converte ações locais em addXP do xpSlice (arquitetura A)
export const achievementsMiddleware = (store: any) => (next: any) => (action: any) => {
  const res = next(action);

  // AQUI interceptamos as ações locais que devem gerar XP global
  switch (action.type) {
    case "achievements/addCheckinLocal": {
      // cada checkin dá XP_FOR_CHECKIN
      store.dispatch({ type: "xp/addXP", payload: XP_FOR_CHECKIN });
      // show floating XP toast
      store.dispatch({ type: "ui/showXPToast", payload: XP_FOR_CHECKIN });
      break;
    }

    case "achievements/earnAchievementLocal": {
      const type = action.meta?.type ?? "generic";
      const xpAmount = XP_BY_TYPE[type] ?? XP_BY_TYPE.generic;
      store.dispatch({ type: "xp/addXP", payload: xpAmount });
      store.dispatch({ type: "ui/showXPToast", payload: xpAmount });
      break;
    }

    case "achievements/weeklyGoalAchievedLocal": {
      store.dispatch({ type: "xp/addXP", payload: XP_FOR_WEEKLY_GOAL });
      store.dispatch({ type: "ui/showXPToast", payload: XP_FOR_WEEKLY_GOAL });
      break;
    }

    case "achievements/monthlyGoalAchievedLocal": {
      store.dispatch({ type: "xp/addXP", payload: XP_FOR_MONTHLY_GOAL });
      store.dispatch({ type: "ui/showXPToast", payload: XP_FOR_MONTHLY_GOAL });
      break;
    }

    default:
      break;
  }

  return res;
};

export default achievementsSlice.reducer;
