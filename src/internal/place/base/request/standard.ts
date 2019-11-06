import Request from './request';
import HttpMethod from "../../../../method/method";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    public path : '/internal/place' = '/internal/place';

    constructor(
        public method : Method,
        public body : Body
    ) {
    }

}