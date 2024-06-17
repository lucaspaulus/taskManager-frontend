import { z } from "zod"
export const loginSchema = z.object({
    email: z.string().min(1, "Email é obrigatório").email({ message: "Email Inválido" }),
    password: z.string().min(1, "Senha é obrigatório").min(8, "Mínimo de 8 caracteres"),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
