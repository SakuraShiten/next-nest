import {z} from "zod";

export const pageElementTextSchema = z.object({
    text: z.string()
        .min(1, 'Введите текст')
        .max(100, 'Максимальная длина 100')
})

export const pageElementHeaderSchema = z.object({
    header: z.string()
        .min(1, 'Введите заголовок')
        .max(100, 'Максимальная длина 100')
})