import {z} from "zod";

export const UsersCreateSchema = z.object({
    login: z.string().min(3).max(50),
    password: z.string().min(6),
}).required()

export type UsersCreateDto = z.infer<typeof UsersCreateSchema>

export const UserResSchema = z.object({
    id: z.number().int(),
    login: z.string(),
    createAt: z.date(),
    updateAt: z.date().nullable(),
})

export const UsersCreateResSchema = z.object({
    token: z.string()
})


