export type UsersControllerMe200 = {
    /**
     * @type integer
    */
    id: number;
    /**
     * @type string
    */
    login: string;
    /**
     * @type string, date-time
    */
    createAt: string;
    updateAt: (string | null);
};

 export type UsersControllerMe400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type UsersControllerMeQueryResponse = {
    /**
     * @type integer
    */
    id: number;
    /**
     * @type string
    */
    login: string;
    /**
     * @type string, date-time
    */
    createAt: string;
    updateAt: (string | null);
};

 export type UsersControllerMeQuery = {
    Response: UsersControllerMeQueryResponse;
    Errors: UsersControllerMe400;
};