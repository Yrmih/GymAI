import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Usuario } from "@/src/types/usuario";
import { PerfilUsuario } from "@/src/types/perfil";

interface UsuarioState {
  usuario: Usuario & Partial<PerfilUsuario>;
}

const initialState: UsuarioState = {
  usuario: {
    nome: "",
    logado: false,
    altura: undefined,
    peso: undefined,
    biotipo: undefined,
    tempoTreino: undefined,
    email: "",
    foto: "",
    avatar: "",
    token: "",
  },
};

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    setUsuario: (state, action: PayloadAction<Partial<Usuario & PerfilUsuario>>) => {
      state.usuario = { ...state.usuario, ...action.payload, logado: true };
    },
    logoutUsuario: (state) => {
      state.usuario = {
        nome: "",
        logado: false,
        altura: undefined,
        peso: undefined,
        biotipo: undefined,
        tempoTreino: undefined,
        email: "",
        foto: "",
        avatar: "",
        token: "",
      };
    },
  },
});

export const { setUsuario, logoutUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;
