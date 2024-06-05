import {applyDecorators, UseInterceptors} from "@nestjs/common";
import {TransactionInterceptor} from "@/common/interceptors/transaction.interceptor";

export function Transaction() {
    return applyDecorators(UseInterceptors(TransactionInterceptor));
}