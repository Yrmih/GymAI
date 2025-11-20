
import { registerSession } from "./slices/frequencySlice";
import { addXP } from "./slices/xpSlice";
import { earnAchievementLocal } from "./slices/achievementsSlice";

export const registerTrainingSession = () => (dispatch: any) => {
  // 1. Marca sessão
  dispatch(registerSession());

  // 2. Dá XP por treinar
  dispatch(addXP(10));

  // 3. Checa conquistas simples (exemplo)
  dispatch(earnAchievementLocal("first_session"));
  dispatch(earnAchievementLocal("five_sessions"));
};
