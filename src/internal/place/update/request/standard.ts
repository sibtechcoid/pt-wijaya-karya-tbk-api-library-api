import Request from './request';
import Place from "../../place";
import Method from "../../../../method/method";
export default class Standard implements Request {

    public method : Method.PATCH = Method.PATCH;
    public path : '/internal/place' = '/internal/place';

    constructor(
        public body : Place<number>
    ) {
    }

}

