import {z} from "zod";

export const UserAuthSchema = z.object({
    login: z.string({
        required_error: 'логин обязателен'
    }).min(6, {
        message: 'логин должен быть больше 6 символов'
    }),
    password: z.string({
        required_error: 'пароль обязателен'
    }).min(6, {
        message: 'пароль должен быть больше 6 символов'
    })
})