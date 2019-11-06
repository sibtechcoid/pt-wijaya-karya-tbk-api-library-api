import Request from './request';
import HttpMethod from "../../../../method/method";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    readonly path : '/internal/place' = '/internal/place';

    constructor(
        readonly method : Method,
        readonly body : Body
    ) {
    }

}