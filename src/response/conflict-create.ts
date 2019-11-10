import Conflict from "./conflict";

export default class ConflictCreate<Body> implements Conflict<Body> {

    public code : 409 = 409;
    public message : string  = 'Conflict';

    constructor(
        public body : Body
    ) {

    }
}