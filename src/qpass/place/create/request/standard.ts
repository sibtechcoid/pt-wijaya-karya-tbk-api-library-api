import Request from './request';
import Method from "http-method-enum";
import Place from "../../place";
import BaseStandard from '../../base/request/standard';

export default class Standard extends BaseStandard<Method.PUT, Place<undefined>> implements Request {

    constructor(
        body : Place<undefined>
    ) {
        super(Method.PUT, body);
    }

}