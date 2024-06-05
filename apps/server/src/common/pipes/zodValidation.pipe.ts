import {PipeTransform, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import {ZodSchema} from 'zod';

export class ZodValidation implements PipeTransform {
    constructor(private schema: ZodSchema) {
    }

    transform(value: unknown, metadata: ArgumentMetadata) {
        if (metadata.type !== 'body') return value;
        try {
            const parsedValue = this.schema.parse(value);
            return parsedValue;
        } catch (error) {
            if (error.errors && Array.isArray(error.errors)) {
                const errorFirst = error.errors[0]
                let customErrorMessage = errorFirst?.message || 'Ошибка валидации типов'

                if (errorFirst.code === 'invalid_type') {
                    if (errorFirst?.received === 'undefined') {
                        customErrorMessage = `Поле '${errorFirst.path[0]}', обязательно`
                    }

                    if (errorFirst?.received !== errorFirst?.expected) {
                        customErrorMessage = `Поле '${errorFirst.path[0]}', должно иметь тип '${errorFirst.expected}'`
                    }
                }

                throw new BadRequestException(customErrorMessage);
            } else {
                throw new BadRequestException('Validation failed');
            }
        }
    }
}
