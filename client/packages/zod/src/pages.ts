import {z} from "../index";
import {ElementsResSchema} from "./pageElements";

export const PagesCreateSchema = z.object({
    title: z.string().min(1).max(100),
    url: z.string().min(1).max(100),
    isPublished: z.boolean().optional()
})

export type PagesCreateDto = z.infer<typeof PagesCreateSchema>

export const PagesCreateResSchema = z.object({
    id: z.number()
})

export type PagesCreateResDto = z.infer<typeof PagesCreateResSchema>

export const PageResSchema = z.object({
    id: z.number(),
    title: z.string(),
    url: z.string(),
    isPublished: z.boolean(),
    createAt: z.date(),
    updateAt: z.date().optional()
})

export type PageDto = z.infer<typeof PageResSchema>

export const PageElementsResSchema = z.object({
    page: PageResSchema,
    elements: ElementsResSchema
})

export type PageElementsDto = z.infer<typeof PageElementsResSchema>

export const PagesResSchema = PageResSchema.array()

export type PagesDto = z.infer<typeof PagesResSchema>