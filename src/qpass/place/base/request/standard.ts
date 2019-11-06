import Request from './request';
import HttpMethod from "http-method-enum";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    readonly path : '/qpass/place' = '/qpass/place';

    constructor(
        readonly method : Method,
        readonly body : Body
    ) {
    }

}