export type UsersControllerRegistration200 = {
    /**
     * @type string
    */
    token: string;
};

 export type UsersControllerRegistration400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type UsersControllerRegistrationMutationRequest = {
    /**
     * @type string
    */
    login: string;
    /**
     * @type string
    */
    password: string;
};

 export type UsersControllerRegistrationMutationResponse = {
    /**
     * @type string
    */
    token: string;
};

 export type UsersControllerRegistrationMutation = {
    Response: UsersControllerRegistrationMutationResponse;
    Request: UsersControllerRegistrationMutationRequest;
    Errors: UsersControllerRegistration400;
};