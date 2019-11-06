import Request from './request';
import Place from "../../place";
import Method from "../../../../method/method";
export default class Standard implements Request {

    readonly method : Method.PATCH = Method.PATCH;
    readonly path : '/internal/place' = '/internal/place';

    constructor(
        readonly body : Place<number>
    ) {
    }

}
