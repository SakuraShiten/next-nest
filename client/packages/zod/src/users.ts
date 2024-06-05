import {z} from "zod";

export const UsersCreateSchema = z.object({
    login: z.string().min(3, 'Минимум 3 символа').max(50),
    password: z.string().min(6, 'Минимум 6 символов').max(50),
}).required()

export type UsersCreateDto = z.infer<typeof UsersCreateSchema>

export const UserResSchema = z.object({
    id: z.number().int(),
    login: z.string(),
    createAt: z.date(),
    updateAt: z.date().nullable(),
})

export type UserResDto = z.infer<typeof UserResSchema>

export const UsersCreateResSchema = z.object({
    token: z.string()
})

export type UsersCreateResDto = z.infer<typeof UsersCreateResSchema>