import {ApiBadRequestResponse} from "@nestjs/swagger";
import {applyDecorators} from "@nestjs/common";
import {zodToSchema} from "@/common/helpers/schema";
import {BadRequestSchema} from "@repo/zod/src/types";

export function ApiBadRequestResponseZod() {
    return applyDecorators(ApiBadRequestResponse({schema: zodToSchema(BadRequestSchema)}))
}