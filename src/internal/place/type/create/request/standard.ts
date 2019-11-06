import Request from './request';
import Type from "../../type";
import BaseStandard from '../../base/request/standard';
import Method from "../../../../../method/method";

export default class Standard extends BaseStandard<Method.PUT, Type<undefined>> implements Request {

    constructor(
        body : Type<undefined>
    ) {
        super(Method.PUT, body);
    }

}