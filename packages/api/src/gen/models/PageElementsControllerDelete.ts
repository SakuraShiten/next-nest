export type PageElementsControllerDeletePathParams = {
    /**
     * @type number
    */
    pageId: number;
    /**
     * @type number
    */
    elementId: number;
};

 export type PageElementsControllerDelete400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PageElementsControllerDeleteError = boolean;

 export type PageElementsControllerDeleteMutationResponse = any;

 export type PageElementsControllerDeleteMutation = {
    Response: PageElementsControllerDeleteMutationResponse;
    PathParams: PageElementsControllerDeletePathParams;
    Errors: PageElementsControllerDelete400;
};