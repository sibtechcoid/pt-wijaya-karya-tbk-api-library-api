import Request from './request';;
import Place from "../../place";
import Method from "../../../../method/method";
import Id from "../../../../id/id";
export default class Standard implements Request {

    public method : Method.PATCH = Method.PATCH;
    public path : '/qpass/place' = '/qpass/place';

    constructor(
        public body : Place & Id
    ) {
    }

}