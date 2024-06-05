export type PagesControllerRemovePathParams = {
    /**
     * @type number
    */
    pageId: number;
};

 export type PagesControllerRemove200 = boolean;

 export type PagesControllerRemove400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PagesControllerRemoveMutationResponse = boolean;

 export type PagesControllerRemoveMutation = {
    Response: PagesControllerRemoveMutationResponse;
    PathParams: PagesControllerRemovePathParams;
    Errors: PagesControllerRemove400;
};