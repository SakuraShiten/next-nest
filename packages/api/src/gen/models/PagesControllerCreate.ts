export type PagesControllerCreate200 = {
    /**
     * @type number
    */
    id: number;
};

 export type PagesControllerCreate400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PagesControllerCreateMutationRequest = {
    /**
     * @type string
    */
    title: string;
    /**
     * @type string
    */
    url: string;
    /**
     * @type boolean | undefined
    */
    isPublished?: boolean;
};

 export type PagesControllerCreateMutationResponse = {
    /**
     * @type number
    */
    id: number;
};

 export type PagesControllerCreateMutation = {
    Response: PagesControllerCreateMutationResponse;
    Request: PagesControllerCreateMutationRequest;
    Errors: PagesControllerCreate400;
};