import Request from './request';
import Method from "http-method-enum";
import Place from "../../place";
export default class Standard implements Request {

    readonly method : Method.PATCH = Method.PATCH;
    readonly path : '/qpass/place' = '/qpass/place';

    constructor(
        readonly body : Place<number>
    ) {
    }

}