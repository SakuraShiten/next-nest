export type PageElementsControllerGetPathParams = {
    /**
     * @type number
    */
    pageId: number;
};

 export const pageElementsControllerGet200Type = {
    "header": "header",
    "text": "text"
} as const;
export type PageElementsControllerGet200Type = (typeof pageElementsControllerGet200Type)[keyof typeof pageElementsControllerGet200Type];
export type PageElementsControllerGet200 = {
    /**
     * @type number
    */
    id: number;
    /**
     * @type string
    */
    type: PageElementsControllerGet200Type;
    /**
     * @type string, date-time
    */
    createAt: string;
    /**
     * @type number
    */
    position: number;
    /**
     * @type object | undefined
    */
    header?: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        header: string;
    };
    /**
     * @type object | undefined
    */
    text?: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        text: string;
    };
}[];

 export type PageElementsControllerGet400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export const pageElementsControllerGetQueryResponseType = {
    "header": "header",
    "text": "text"
} as const;
export type PageElementsControllerGetQueryResponseType = (typeof pageElementsControllerGetQueryResponseType)[keyof typeof pageElementsControllerGetQueryResponseType];
export type PageElementsControllerGetQueryResponse = {
    /**
     * @type number
    */
    id: number;
    /**
     * @type string
    */
    type: PageElementsControllerGetQueryResponseType;
    /**
     * @type string, date-time
    */
    createAt: string;
    /**
     * @type number
    */
    position: number;
    /**
     * @type object | undefined
    */
    header?: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        header: string;
    };
    /**
     * @type object | undefined
    */
    text?: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        text: string;
    };
}[];

 export type PageElementsControllerGetQuery = {
    Response: PageElementsControllerGetQueryResponse;
    PathParams: PageElementsControllerGetPathParams;
    Errors: PageElementsControllerGet400;
};