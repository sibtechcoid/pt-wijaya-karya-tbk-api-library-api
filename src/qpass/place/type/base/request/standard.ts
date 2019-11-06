import Request from './request';
import Method from "http-method-enum";
import Type from "../../type";
import HttpMethod from "http-method-enum";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    readonly path : '/qpass/place/type' = '/qpass/place/type';

    constructor(
        readonly method : Method,
        readonly body : Body
    ) {
    }

}