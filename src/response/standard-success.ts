import Response from "./response";

export default class StandardSuccess<Body> implements Response<200, Body> {

    public code : 200 = 200;
    public message : string  = 'OK';

    constructor(
        public body : Body
    ) {

    }
}