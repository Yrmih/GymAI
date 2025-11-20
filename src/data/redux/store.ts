import { configureStore } from "@reduxjs/toolkit";
import perfilReducer from "./slices/perfilSlice";
import bodyReducer from "./slices/usuarioBodySlice";
import achievementsReducer from "./slices/achievementsSlice";
import xpReducer from "./slices/xpSlice";

export const store = configureStore({
  reducer: {
    perfil: perfilReducer,
    body: bodyReducer,
    achievements: achievementsReducer,
    xp: xpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
