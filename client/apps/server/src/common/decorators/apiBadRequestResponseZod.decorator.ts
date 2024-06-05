import {BadRequestSchema} from "@/common/types/types";
import {ApiBadRequestResponse} from "@nestjs/swagger";
import {applyDecorators} from "@nestjs/common";
import {zodToSchema} from "@/common/helpers/schema";

export function ApiBadRequestResponseZod() {
    return applyDecorators(ApiBadRequestResponse({schema: zodToSchema(BadRequestSchema)}))
}