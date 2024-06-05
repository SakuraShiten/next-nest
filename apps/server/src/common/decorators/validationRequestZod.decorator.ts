import {ZodSchema} from "zod";
import {applyDecorators, UsePipes} from "@nestjs/common";
import {ZodValidation} from "@/common/pipes/zodValidation.pipe";

export function ValidationRequestZod(schema: ZodSchema) {
    return applyDecorators(UsePipes(new ZodValidation(schema)))
}