import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsuarioState {
  nome: string;
  logado: boolean;
}

const initialState: UsuarioState = {
  nome: '',
  logado: false,
};

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ nome: string }>) => {
      state.nome = action.payload.nome;
      state.logado = true;
    },
    logout: (state) => {
      state.nome = '';
      state.logado = false;
    },
  },
});

export const { login, logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
