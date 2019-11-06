import Request from './request';
import Type from "../../type";
import HttpMethod from "../../../../../method/method";

export default class Standard<Method extends HttpMethod, Body> implements Request<Method, Body> {

    readonly path : '/internal/place/type' = '/internal/place/type';

    constructor(
        readonly method : Method,
        readonly body : Body
    ) {
    }

}