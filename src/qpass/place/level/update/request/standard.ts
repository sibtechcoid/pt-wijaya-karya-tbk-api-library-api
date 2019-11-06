import Request from './request';
import Type from "../../type";
import Method from "../../../../../method/method";
export default class Standard implements Request {

    public method : Method.PATCH = Method.PATCH;
    public path : '/qpass/place/level' = '/qpass/place/level';

    constructor(
        public body : Type<number>
    ) {
    }

}