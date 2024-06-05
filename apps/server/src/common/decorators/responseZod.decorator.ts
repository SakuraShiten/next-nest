import {ZodTypeAny} from "zod";
import {applyDecorators} from "@nestjs/common";
import {ApiBadRequestResponseZod} from "@/common/decorators/apiBadRequestResponseZod.decorator";
import {ApiOkResponseZod} from "@/common/decorators/apiOkResponeZod.decorator";
import {ValidationResponseZod} from "@/common/decorators/validationResponseZod.decorator";

export function ResponseZod(schema: ZodTypeAny) {
    return applyDecorators(
        ApiOkResponseZod(schema),
        ApiBadRequestResponseZod(),
        ValidationResponseZod(schema)
    )
}