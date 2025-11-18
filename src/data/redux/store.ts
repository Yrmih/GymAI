import { configureStore } from "@reduxjs/toolkit";
import perfilReducer from "./slices/perfilSlice";
import bodyReducer from "./slices/usuarioBodySlice";

export const store = configureStore({
  reducer: {
    perfil: perfilReducer,
    body: bodyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
