export type UsersControllerAuth200 = {
    /**
     * @type string
    */
    token: string;
};

 export type UsersControllerAuth400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type UsersControllerAuthMutationRequest = {
    /**
     * @type string
    */
    login: string;
    /**
     * @type string
    */
    password: string;
};

 export type UsersControllerAuthMutationResponse = {
    /**
     * @type string
    */
    token: string;
};

 export type UsersControllerAuthMutation = {
    Response: UsersControllerAuthMutationResponse;
    Request: UsersControllerAuthMutationRequest;
    Errors: UsersControllerAuth400;
};