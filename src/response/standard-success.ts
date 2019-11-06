import Response from "./response";

export default class StandardSuccess<Body> implements Response<200, Body> {

    readonly code : 200 = 200;
    readonly message : string  = 'OK';

    constructor(
        readonly body : Body
    ) {

    }
}