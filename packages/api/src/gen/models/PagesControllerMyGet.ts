export type PagesControllerMyGet200 = {
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

 export type PagesControllerMyGet400 = {
    /**
     * @type number
    */
    statusCode: number;
    /**
     * @type string
    */
    message: string;
};

 export type PagesControllerMyGetQueryResponse = {
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

 export type PagesControllerMyGetQuery = {
    Response: PagesControllerMyGetQueryResponse;
    Errors: PagesControllerMyGet400;
};