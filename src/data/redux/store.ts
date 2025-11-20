
import { configureStore } from "@reduxjs/toolkit";
import perfilReducer from "./slices/perfilSlice";
import bodyReducer from "./slices/usuarioBodySlice";
import achievementsReducer, {
  achievementsMiddleware,
} from "./slices/achievementsSlice";
import xpReducer from "./slices/xpSlice";
import uiReducer from "./slices/uiSlice";
import frequencyReducer from "./slices/frequencySlice";

export const store = configureStore({
  reducer: {
    perfil: perfilReducer,
    body: bodyReducer,
    achievements: achievementsReducer,
    xp: xpReducer,
    ui: uiReducer ?? (() => ({})),
    frequency: frequencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      achievementsMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
