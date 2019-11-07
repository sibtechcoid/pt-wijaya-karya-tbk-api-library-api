import Request from './request';
import Type from "../../type";
import BaseStandard from '../../base/request/standard';
import Method from "../../../../../method/method";

export default class Standard extends BaseStandard<Method.PUT, Type> implements Request {

    constructor(
        body : Type
    ) {
        super(Method.PUT, body);
    }

}