// src/data/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import perfilReducer from "./slices/perfilSlice";
import bodyReducer from "./slices/usuarioBodySlice";
import achievementsReducer, { achievementsMiddleware } from "./slices/achievementsSlice";
import xpReducer from "./slices/xpSlice";
import uiReducer from "./slices/uiSlice"; // opcional: para mostrar o XP toast — se não tiver, posso mandar o slice

export const store = configureStore({
  reducer: {
    perfil: perfilReducer,
    body: bodyReducer,
    achievements: achievementsReducer,
    xp: xpReducer,
    ui: uiReducer ?? (() => ({})), // se não existir, remova ou crie uiSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(achievementsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
