import Request from './request';

import Type from "../../type";
import Method from "../../../../../method/method";
export default class Standard implements Request {

    readonly method : Method.PATCH = Method.PATCH;
    readonly path : '/qpass/place/type' = '/qpass/place/type';

    constructor(
        readonly body : Type<number>
    ) {
    }

}