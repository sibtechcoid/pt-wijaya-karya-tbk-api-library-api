import Conflict from "./conflict";
import BadRequest from "./bad-request";

export default class ConflictCreate<Body> implements BadRequest<Body> {

    public code : 400 = 400;

    constructor(
        public message : string  = 'Bad Request',
        public body : Body
    ) {

    }
}