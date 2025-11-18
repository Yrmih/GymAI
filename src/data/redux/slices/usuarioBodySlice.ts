import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '@/src/types/type-files'; 

const initialState: Usuario = {
  logado: false,
  nome: ''
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
      state.frequenciaSemanal = undefined;
      state.gruposPrioritarios = undefined;
      state.lesoes = undefined;
    },
    updateUserBody: (state, action: PayloadAction<{
      altura: number;
      peso: number;
      biotipo: string;
      tempoTreino: string;
      // novos campos
      frequenciaSemanal?: string;
      gruposPrioritarios?: string;
      lesoes?: string;
    }>) => {
      state.altura = action.payload.altura;
      state.peso = action.payload.peso;
      state.biotipo = action.payload.biotipo;
      state.tempoTreino = action.payload.tempoTreino;

      if (action.payload.frequenciaSemanal)
        state.frequenciaSemanal = action.payload.frequenciaSemanal;

      if (action.payload.gruposPrioritarios)
        state.gruposPrioritarios = action.payload.gruposPrioritarios;

      if (action.payload.lesoes)
        state.lesoes = action.payload.lesoes;
    }
  },
});

export const { login, logout, updateUserBody } = usuarioSlice.actions;
export default usuarioSlice.reducer;
