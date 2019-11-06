import Request from './request';

import Type from "../../type";
import Method from "../../../../../method/method";
export default class Standard implements Request {

    public method : Method.PATCH = Method.PATCH;
    public path : '/qpass/place/type' = '/qpass/place/type';

    constructor(
        public body : Type<number>
    ) {
    }

}