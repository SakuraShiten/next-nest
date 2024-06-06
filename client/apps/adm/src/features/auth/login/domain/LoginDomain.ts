import {z} from "zod";

export const loginSchema = z.object({
    login: z.string({required_error: 'Обязательное поле'})
        .min(6, 'Минимальная длина 6')
        .max(100, 'Максимальная длина 100'),

    password: z.string({required_error: 'Обязательное поле'})
        .min(6, 'Минимальная длина 6')
        .max(100, 'Максимальная длина 100')
})