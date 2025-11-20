import { registerSession } from "./slices/frequencySlice";
import { addXP } from "./slices/xpSlice";
import { earnAchievementLocal } from "./slices/achievementsSlice";

export const registerTrainingSession = () => (dispatch: any) => {
  dispatch(registerSession());                     // registra treino
  dispatch(addXP(10));                             // dá XP global
  dispatch(earnAchievementLocal("first_session")); // desbloqueia conquista
};
