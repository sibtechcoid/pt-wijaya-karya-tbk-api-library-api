import Request from './request';
import Method from "http-method-enum";
import Type from "../../type";
import BaseStandard from '../../base/request/standard';

export default class Standard extends BaseStandard<Method.PUT, Type<undefined>> implements Request {

    constructor(
        body : Type<undefined>
    ) {
        super(Method.PUT, body);
    }

}