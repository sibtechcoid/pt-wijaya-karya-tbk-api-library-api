import Request from './request';
import Method from "http-method-enum";
import Place from "../../place";
import BaseStandard from '../../base/request/standard';
import Id from "../../../../id/id";

export default class Standard extends BaseStandard<Method.POST, Id<number>> implements Request {

    constructor(
        body : Place<number>
    ) {
        super(Method.POST, body);
    }

}