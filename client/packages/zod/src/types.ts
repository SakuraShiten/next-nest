import {z} from "zod";

export const ElementTypesArray = ['header', 'text'] as const
export type ElementTypes = typeof ElementTypesArray[number]

export const UserRolesArray = ['USER', 'ADMIN'] as const
export type UserRolesTypes = typeof UserRolesArray[number]

export const BadRequestSchema = z.object({
    statusCode: z.number(),
    message: z.string()
})