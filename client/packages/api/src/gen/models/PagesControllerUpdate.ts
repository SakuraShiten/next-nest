export type PagesControllerUpdatePathParams = {
    /**
     * @type number
    */
    pageId: number;
};

 export type PagesControllerUpdate200 = boolean;

 export type PagesControllerUpdate400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PagesControllerUpdateMutationRequest = {
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

 export type PagesControllerUpdateMutationResponse = boolean;

 export type PagesControllerUpdateMutation = {
    Response: PagesControllerUpdateMutationResponse;
    Request: PagesControllerUpdateMutationRequest;
    PathParams: PagesControllerUpdatePathParams;
    Errors: PagesControllerUpdate400;
};