import {z} from "zod";

export const registrationSchema = z.object({
    login: z.string({
        required_error: 'Логин обязателен',
        invalid_type_error: 'Логин должен быть строкой'
    }).min(6, 'Логин должен быть больше 6 символов'),

    password: z.string({
        required_error: 'Пароль обязателен',
        invalid_type_error: 'Пароль должен быть строкой'
    }).min(6, 'Пароль должен быть больше 6 символов')
})