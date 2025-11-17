import { z } from "zod";

const senhaRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export enum SexoEnum {
  Masculino = "masculino",
  Feminino = "feminino",
  Outro = "outro",
}

export enum NivelEnum {
  Iniciante = "iniciante",
  Intermediario = "intermediario",
  Avancado = "avancado",
}

export enum ObjetivoEnum {
  Massa = "massa",
  Gordura = "gordura",
  Condicionamento = "condicionamento",
}

export const registerSchema = z
  .object({
    nome: z.string().min(1, "Nome é obrigatório"),

    email: z.string().email("E-mail inválido"),

    senha: z
      .string()
      .regex(
        senhaRegex,
        "Senha deve ter 8 caracteres, com letra maiúscula, minúscula, número e símbolo"
      ),

    confirmarSenha: z.string().min(1, "Confirme sua senha"),

    dataNascimento: z.coerce.date({
      message: "Data de nascimento é obrigatória",
    }),

    sexo: z.nativeEnum(SexoEnum, {
      message: "Selecione o sexo",
    }),

    nivel: z.nativeEnum(NivelEnum, {
      message: "Selecione o nível",
    }),

    objetivo: z.nativeEnum(ObjetivoEnum, {
      message: "Selecione o objetivo",
    }),
  })

  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
