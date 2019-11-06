import Request from './request';
import Type from "../../type";
import Method from "../../../../../method/method";
export default class Standard implements Request {

    readonly method : Method.PATCH = Method.PATCH;
    readonly path : '/internal/place/type' = '/internal/place/type';

    constructor(
        readonly body : Type<number>
    ) {
    }

}