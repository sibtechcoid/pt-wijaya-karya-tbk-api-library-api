import Request from './request';
import Type from "../../type";
import Method from "../../../../../method/method";
import Id from "../../../../../id/id";
export default class Standard implements Request {

    public method : Method.PATCH = Method.PATCH;
    public path : '/internal/place/type' = '/internal/place/type';

    constructor(
        public body : Type & Id
    ) {
    }

}