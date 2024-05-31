export type PageElementsControllerCreatePathParams = {
    /**
     * @type number
    */
    pageId: number;
};

 export type PageElementsControllerCreate200 = {
    /**
     * @type number
    */
    id: number;
};

 export type PageElementsControllerCreate400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export const pageElementsControllerCreateMutationRequestType = {
    "header": "header",
    "text": "text"
} as const;
export type PageElementsControllerCreateMutationRequestType = (typeof pageElementsControllerCreateMutationRequestType)[keyof typeof pageElementsControllerCreateMutationRequestType];
export type PageElementsControllerCreateMutationRequest = {
    /**
     * @type string
    */
    type: PageElementsControllerCreateMutationRequestType;
    /**
     * @type string | undefined
    */
    header?: string;
    /**
     * @type string | undefined
    */
    text?: string;
};

 export type PageElementsControllerCreateMutationResponse = {
    /**
     * @type number
    */
    id: number;
};

 export type PageElementsControllerCreateMutation = {
    Response: PageElementsControllerCreateMutationResponse;
    Request: PageElementsControllerCreateMutationRequest;
    PathParams: PageElementsControllerCreatePathParams;
    Errors: PageElementsControllerCreate400;
};