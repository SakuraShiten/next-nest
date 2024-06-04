import {ZodSchema} from "zod";
import {applyDecorators, UseInterceptors} from "@nestjs/common";
import {PipesResponseZod} from "@/common/pipes/pipesResponseZod.pipe";

export function ValidationResponseZod(schema: ZodSchema) {
    return applyDecorators(UseInterceptors(new PipesResponseZod(schema)));
}