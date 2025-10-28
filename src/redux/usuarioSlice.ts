// src/redux/slices/usuarioSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsuarioState {
  nome: string;
  logado: boolean;
  altura?: number;
  peso?: number;
  biotipo?: string;
  tempoTreino?: string;
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
      state.altura = undefined;
      state.peso = undefined;
      state.biotipo = undefined;
      state.tempoTreino = undefined;
    },
    updateUserBody: (state, action: PayloadAction<{
      altura: number;
      peso: number;
      biotipo: string;
      tempoTreino: string;
    }>) => {
      state.altura = action.payload.altura;
      state.peso = action.payload.peso;
      state.biotipo = action.payload.biotipo;
      state.tempoTreino = action.payload.tempoTreino;
    }
  },
});

export const { login, logout, updateUserBody } = usuarioSlice.actions;
export default usuarioSlice.reducer;
