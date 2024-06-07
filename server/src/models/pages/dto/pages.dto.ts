import {z} from "zod";
import {ElementsResSchema} from "@/models/pageElements/dto/elements.dto";

export const PagesCreateSchema = z.object({
    title: z.string().min(1).max(100).regex(/^[a-zA-Z0-9а-яА-Я\s]+$/),
    isPublished: z.boolean().optional()
})

export type PagesCreateDto = z.infer<typeof PagesCreateSchema>

export const PagesCreateResSchema = z.object({
    id: z.number()
})

export const PageResSchema = z.object({
    id: z.number(),
    title: z.string(),
    url: z.string(),
    isPublished: z.boolean(),
    createAt: z.date(),
    updateAt: z.date().optional()
})

export const PageElementsResSchema = z.object({
    page: PageResSchema,
    elements: ElementsResSchema
})

export const PagesResSchema = PageResSchema.array()

