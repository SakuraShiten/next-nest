export const operations = {
    "UsersController_registration": {
        "path": "/api/users/registration",
        "method": "post"
    },
    "UsersController_auth": {
        "path": "/api/users/auth",
        "method": "post"
    },
    "UsersController_me": {
        "path": "/api/users/me",
        "method": "get"
    },
    "UsersController_verify": {
        "path": "/api/users/verify",
        "method": "get"
    },
    "PagesController_findAll": {
        "path": "/api/pages",
        "method": "get"
    },
    "PagesController_create": {
        "path": "/api/pages",
        "method": "post"
    },
    "PagesController_myGet": {
        "path": "/api/pages/my",
        "method": "get"
    },
    "PagesController_findOne": {
        "path": "/api/pages/:userLogin/:pageUrl",
        "method": "get"
    },
    "PagesController_update": {
        "path": "/api/pages/:pageId",
        "method": "put"
    },
    "PagesController_remove": {
        "path": "/api/pages/:pageId",
        "method": "delete"
    },
    "PagesController_get": {
        "path": "/api/pages/:id",
        "method": "get"
    },
    "PageElementsController_create": {
        "path": "/api/pages/:pageId/elements",
        "method": "post"
    },
    "PageElementsController_get": {
        "path": "/api/pages/:pageId/elements",
        "method": "get"
    },
    "PageElementsController_delete": {
        "path": "/api/pages/:pageId/elements/:elementId",
        "method": "delete"
    },
    "PageElementsController_updatePosition": {
        "path": "/api/pages/:pageId/elements/positions",
        "method": "put"
    }
} as const;