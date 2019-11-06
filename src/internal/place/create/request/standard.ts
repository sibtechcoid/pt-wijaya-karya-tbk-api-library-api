import Request from './request';
import Place from "../../place";
import BaseStandard from '../../base/request/standard';
import Method from "../../../../method/method";

export default class Standard extends BaseStandard<Method.PUT, Place<undefined>> implements Request {

    constructor(
        body : Place<undefined>
    ) {
        super(Method.PUT, body);
    }

}