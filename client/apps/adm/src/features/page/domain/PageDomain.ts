import {z} from "zod";

export const pageSchema = z.object({
    title: z.string()
        .min(1, 'Минимальная длина 1 символ')
        .max(100, 'Максимальная длина 100 символов'),

    url: z.string()
        .min(1, 'Минимальная длина 1 символ')
        .max(100, 'Максимальная длина 100 символов'),
})