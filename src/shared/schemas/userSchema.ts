import { z } from "zod"

export const userSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().min(1, "Email é obrigatório").email({ message: "Email inválido" }),
    password: z
        .string()
        .min(1, "Senha é obrigatório")
        .min(8, "Mínimo de 8 caracteres")
        .regex(/[a-zA-Z]+/, "Precisa conter no minimo uma letra.")
        .regex(/[0-9]+/, "Precisa conter no minimo um número.")
        .regex(/\W+/, "Precisa conter no minimo um caracter especial."),
})

export type UserSchemaType = z.infer<typeof userSchema>
