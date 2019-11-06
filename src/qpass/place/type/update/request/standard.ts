import Request from './request';
import Method from "http-method-enum";
import Type from "../../type";
export default class Standard implements Request {

    readonly method : Method.PATCH = Method.PATCH;
    readonly path : '/qpass/place/type' = '/qpass/place/type';

    constructor(
        readonly body : Type<number>
    ) {
    }

}