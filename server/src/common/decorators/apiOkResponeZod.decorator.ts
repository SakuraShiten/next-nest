import {ZodTypeAny} from "zod";
import {ApiOkResponse} from "@nestjs/swagger";
import {applyDecorators} from "@nestjs/common";
import {zodToSchema} from "@/common/helpers/schema";

export function ApiOkResponseZod(schema: ZodTypeAny) {
    return applyDecorators(
        ApiOkResponse({schema: zodToSchema(schema)})
    )
}