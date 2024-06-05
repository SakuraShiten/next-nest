export type PagesControllerGetPathParams = {
    /**
     * @type number
    */
    id: number;
};

 export type PagesControllerGet200 = {
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

 export type PagesControllerGet400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PagesControllerGetQueryResponse = {
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

 export type PagesControllerGetQuery = {
    Response: PagesControllerGetQueryResponse;
    PathParams: PagesControllerGetPathParams;
    Errors: PagesControllerGet400;
};