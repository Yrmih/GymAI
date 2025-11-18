import { z } from "zod";

// Enum para meta fitness
export const MetaFitnessEnum = z.enum([
  "Hipertrofia",
  "Emagrecimento",
  "Condicionamento / Resistência",
  "Powerlifting",
]);

export const editProfileSchema = z.object({
  nome: z
    .string()
    .nonempty({ message: "Nome é obrigatório" })
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    
  username: z
    .string()
    .nonempty({ message: "Username é obrigatório" })
    .min(3, { message: "Username deve ter pelo menos 3 caracteres" })
    .regex(/^[a-z0-9_]+$/, {
      message: "Username só pode conter letras minúsculas, números e underscore",
    })
    .transform((val) => val.toLowerCase()),

  bio: z
    .string()
    .max(160, { message: "Bio deve ter no máximo 160 caracteres" })
    .optional(),

  metaFitness: MetaFitnessEnum.optional(),
});

// Tipo TS para formulário
export type EditProfileFormData = z.infer<typeof editProfileSchema>;
