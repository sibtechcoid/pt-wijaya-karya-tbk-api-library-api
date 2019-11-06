import Request from './request';
import HttpMethod from "../../../../../method/method";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    public path : '/qpass/place/level' = '/qpass/place/level';

    constructor(
        public method : Method,
        public body : Body
    ) {
    }

}