import {applyDecorators} from "@nestjs/common";
import {ApiBody} from "@nestjs/swagger";
import {ZodTypeAny} from "zod";
import {zodToSchema} from "@/common/helpers/schema";

export function ApiBodyZod(schema: ZodTypeAny) {
    return applyDecorators(ApiBody({schema: zodToSchema(schema)}))
}