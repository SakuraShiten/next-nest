import {z} from "zod";
import {ElementTypesArray} from "@/common/types/types";

export const ElementCreateSchema = z.object({
    type: z.enum(ElementTypesArray),
    header: z.string().optional(),
    text: z.string().optional(),
}).refine(data => {
    if (data.type === 'header') return !!data.header && !data.text
    if (data.type === 'text') return !!data.text && !data.header
    return false
})

export type ElementCreateDto = z.input<typeof ElementCreateSchema>

export const ElementCreateResSchema = z.object({
    id: z.number(),
})

export const ElementsResSchema = z.array(z.object({
    id: z.number(),
    type: z.enum(ElementTypesArray),
    createAt: z.date(),
    position: z.number(),
    header: z.object({
        id: z.number(),
        header: z.string(),
    }).optional(),
    text: z.object({
        id: z.number(),
        text: z.string(),
    }).optional(),
}))

export type ElementsResDto = z.output<typeof ElementsResSchema>

export const ElementUpdatePositionSchema = z.array(
    z.number().positive()
).min(1).refine(items => new Set(items).size === items.length)

export type ElementUpdatePositionDto = z.input<typeof ElementUpdatePositionSchema>
