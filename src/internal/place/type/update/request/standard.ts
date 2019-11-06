import Request from './request';
import Method from "http-method-enum";
import Type from "../../type";
export default class Standard implements Request {

    readonly method : Method.PATCH = Method.PATCH;
    readonly path : '/internal/place/type' = '/internal/place/type';

    constructor(
        readonly body : Type<number>
    ) {
    }

}