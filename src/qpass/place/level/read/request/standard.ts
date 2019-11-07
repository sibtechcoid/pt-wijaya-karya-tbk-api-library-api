import Request from './request';
import Level from "../../level";
import BaseStandard from '../../base/request/standard';
import Id from "../../../../../id/id";
import Method from "../../../../../method/method";

export default class Standard extends BaseStandard<Method.POST, Id> implements Request {

    constructor(
        body : Id
    ) {
        super(Method.POST, body);
    }

}