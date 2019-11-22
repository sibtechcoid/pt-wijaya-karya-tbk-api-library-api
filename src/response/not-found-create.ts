import NotFound from "./not-found";

export default class NotFoundCreate<Body> implements NotFound<Body> {

    public code : 404 = 404;
    public message : string  = 'Not Found';

    constructor(
        public body : Body
    ) {

    }
}