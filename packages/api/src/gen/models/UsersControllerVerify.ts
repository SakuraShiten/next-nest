export const usersControllerVerifyQueryParamsRole = {
    "USER": "USER",
    "ADMIN": "ADMIN"
} as const;
export type UsersControllerVerifyQueryParamsRole = (typeof usersControllerVerifyQueryParamsRole)[keyof typeof usersControllerVerifyQueryParamsRole];
export type UsersControllerVerifyQueryParams = {
    /**
     * @type string | undefined
    */
    role?: UsersControllerVerifyQueryParamsRole;
};

 export type UsersControllerVerify200 = boolean;

 export type UsersControllerVerify400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type UsersControllerVerifyQueryResponse = boolean;

 export type UsersControllerVerifyQuery = {
    Response: UsersControllerVerifyQueryResponse;
    QueryParams: UsersControllerVerifyQueryParams;
    Errors: UsersControllerVerify400;
};