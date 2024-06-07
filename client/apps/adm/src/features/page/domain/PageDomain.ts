import {z} from "zod";

export const pageSchema = z.object({
    title: z.string({required_error: 'Обязательное поле'})
        .min(1, 'Минимальная длина 1')
        .max(100, 'Максимальная длина 100')
})