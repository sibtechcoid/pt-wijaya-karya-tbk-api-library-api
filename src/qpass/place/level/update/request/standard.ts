import Request from './request';
import Level from "../../level";
import Method from "../../../../../method/method";
import Id from "../../../../../id/id";
export default class Standard implements Request {

    public method : Method.PATCH = Method.PATCH;
    public path : '/qpass/place/level' = '/qpass/place/level';

    constructor(
        public body : Level & Id
    ) {
    }

}