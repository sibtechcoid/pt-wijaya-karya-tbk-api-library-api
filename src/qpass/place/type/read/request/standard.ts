import Request from './request';
import Method from "http-method-enum";
import Type from "../../type";
import BaseStandard from '../../base/request/standard';
import Id from "../../../../../id/id";

export default class Standard extends BaseStandard<Method.POST, Id<number>> implements Request {

    constructor(
        body : Type<number>
    ) {
        super(Method.POST, body);
    }

}