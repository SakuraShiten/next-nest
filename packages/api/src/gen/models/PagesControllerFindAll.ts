export type PagesControllerFindAllQueryParams = {
    /**
     * @type number | undefined
    */
    page?: number;
};

 export type PagesControllerFindAll200 = {
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
}[];

 export type PagesControllerFindAll400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PagesControllerFindAllQueryResponse = {
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
}[];

 export type PagesControllerFindAllQuery = {
    Response: PagesControllerFindAllQueryResponse;
    QueryParams: PagesControllerFindAllQueryParams;
    Errors: PagesControllerFindAll400;
};