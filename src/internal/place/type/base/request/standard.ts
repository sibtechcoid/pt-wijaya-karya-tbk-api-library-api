import Request from './request';
import Type from "../../type";
import HttpMethod from "../../../../../method/method";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    public path : '/internal/place/type' = '/internal/place/type';

    constructor(
        public method : Method,
        public body : Body
    ) {
    }

}