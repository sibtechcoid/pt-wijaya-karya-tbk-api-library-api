import NotFound from "./not-found";
export default class NotFoundCreate<Body> implements NotFound<Body> {
    body: Body;
    code: 404;
    message: string;
    constructor(body: Body);
}
