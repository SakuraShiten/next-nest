export type PagesControllerFindOnePathParams = {
    /**
     * @type string
    */
    userLogin: string;
    /**
     * @type string
    */
    pageUrl: string;
};

 export const pagesControllerFindOne200ElementsType = {
    "header": "header",
    "text": "text"
} as const;
export type PagesControllerFindOne200ElementsType = (typeof pagesControllerFindOne200ElementsType)[keyof typeof pagesControllerFindOne200ElementsType];
export type PagesControllerFindOne200 = {
    /**
     * @type object
    */
    page: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        title: string;
        /**
         * @type string
        */
        url: string;
        /**
         * @type boolean
        */
        isPublished: boolean;
        /**
         * @type string, date-time
        */
        createAt: string;
        /**
         * @type string | undefined, date-time
        */
        updateAt?: string;
    };
    /**
     * @type array
    */
    elements: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        type: PagesControllerFindOne200ElementsType;
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
};

 export type PagesControllerFindOne400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export const pagesControllerFindOneQueryResponseElementsType = {
    "header": "header",
    "text": "text"
} as const;
export type PagesControllerFindOneQueryResponseElementsType = (typeof pagesControllerFindOneQueryResponseElementsType)[keyof typeof pagesControllerFindOneQueryResponseElementsType];
export type PagesControllerFindOneQueryResponse = {
    /**
     * @type object
    */
    page: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        title: string;
        /**
         * @type string
        */
        url: string;
        /**
         * @type boolean
        */
        isPublished: boolean;
        /**
         * @type string, date-time
        */
        createAt: string;
        /**
         * @type string | undefined, date-time
        */
        updateAt?: string;
    };
    /**
     * @type array
    */
    elements: {
        /**
         * @type number
        */
        id: number;
        /**
         * @type string
        */
        type: PagesControllerFindOneQueryResponseElementsType;
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
};

 export type PagesControllerFindOneQuery = {
    Response: PagesControllerFindOneQueryResponse;
    PathParams: PagesControllerFindOnePathParams;
    Errors: PagesControllerFindOne400;
};