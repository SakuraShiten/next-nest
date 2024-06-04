import {ZodTypeAny} from "zod";
import {ApiResponseSchemaHost} from "@nestjs/swagger";
import {zodToJsonSchema} from "zod-to-json-schema";

export const zodToSchema = (schema: ZodTypeAny) => {
    const jsonSchema = zodToJsonSchema(schema) as ApiResponseSchemaHost['schema']
    delete jsonSchema?.['$schema']
    return jsonSchema
}