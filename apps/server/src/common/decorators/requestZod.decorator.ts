import {applyDecorators} from "@nestjs/common";
import {ApiBodyZod} from "@/common/decorators/apiBodyZod.decorator";
import {ValidationRequestZod} from "@/common/decorators/validationRequestZod.decorator";
import {ZodSchema} from "zod";

export function RequestZod(schema: ZodSchema) {
    return applyDecorators(
        ApiBodyZod(schema),
        ValidationRequestZod(schema)
    )
}