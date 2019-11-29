import InternalServerError from "./internal-server-error";
export default class InternalServerErrorCreate<Body> implements InternalServerError<Body> {
    body: Body;
    code: 500;
    message: string;
    constructor(body: Body);
}
