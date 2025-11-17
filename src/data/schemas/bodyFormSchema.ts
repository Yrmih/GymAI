import { z } from "zod";

//Enums para selects
export enum BiotipoEnum {
  Ectomorfo = "Ectomorfo",
  Mesomorfo = "Mesomorfo",
  Endomorfo = "Endomorfo",
}

export enum TempoTreinoEnum {
  "0-6 meses" = "0-6 meses",
  "6-12 meses" = "6-12 meses",
  "1-2 anos" = "1-2 anos",
  "+2 anos" = "+2 anos",
}

export enum FrequenciaSemanalEnum {
  "3x por semana" = "3x por semana",
  "4x por semana" = "4x por semana",
  "5x por semana" = "5x por semana",
  "6x por semana" = "6x por semana",
  "Todos os dias" = "Todos os dias",
}

// Schema Zod
export const bodyFormSchema = z.object({
  altura: z
    .string()
    .min(1, "Altura é obrigatória")
    .regex(/^\d+(\.\d+)?$/, "Altura deve ser um número válido"),

  peso: z
    .string()
    .min(1, "Peso é obrigatório")
    .regex(/^\d+(\.\d+)?$/, "Peso deve ser um número válido"),

  biotipo: z.nativeEnum(BiotipoEnum).refine((val) => !!val, {
    message: "Selecione o biotipo corporal",
  }),

  tempoTreino: z.nativeEnum(TempoTreinoEnum).refine((val) => !!val, {
    message: "Selecione o tempo de treino",
  }),

  frequenciaSemanal: z.nativeEnum(FrequenciaSemanalEnum).refine((val) => !!val, {
    message: "Selecione a frequência semanal",
  }),

  gruposPrioritarios: z.string().optional(),

  lesoes: z.string().optional(),
});

//Tipagem inferida
export type BodyFormData = z.infer<typeof bodyFormSchema>;
