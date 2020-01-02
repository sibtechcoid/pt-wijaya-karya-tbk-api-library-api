import BadRequest from "./bad-request";
export default class ConflictCreate<Body> implements BadRequest<Body> {
    message: string;
    body: Body;
    code: 400;
    constructor(message: string, body: Body);
}
