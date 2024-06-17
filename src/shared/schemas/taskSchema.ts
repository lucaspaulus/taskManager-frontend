import { z } from "zod"
export const taskSchema = z.object({
    title: z.string().min(1, "Título é obrigatório"),
    description: z.string().min(1, "Descrição é obrigatório").min(50, "Precisa ter no mínimo 50 caracteres"),
})

export type TaskSchemaType = z.infer<typeof taskSchema>
