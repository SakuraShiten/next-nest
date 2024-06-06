import {z} from "zod";

export const pageElementTextSchema = z.object({
    text: z.string({required_error: 'Обязательное поле'})
        .min(1, 'Введите текст')
        .max(100, 'Максимальная длина 100')
})

export const pageElementHeaderSchema = z.object({
    header: z.string({required_error: 'Обязательное поле'})
        .min(1, 'Введите заголовок')
        .max(100, 'Максимальная длина 100')
})

export const pageElementTypes = {
    'text': 'Текст',
    'header': 'Заголовок'
} as const