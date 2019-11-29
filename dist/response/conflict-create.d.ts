import Conflict from "./conflict";
export default class ConflictCreate<Body> implements Conflict<Body> {
    body: Body;
    code: 409;
    message: string;
    constructor(body: Body);
}
