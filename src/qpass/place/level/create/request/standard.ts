import Request from './request';
import Level from "../../level";
import BaseStandard from '../../base/request/standard';
import Method from "../../../../../method/method";

export default class Standard extends BaseStandard<Method.PUT, Level<undefined>> implements Request {

    constructor(
        body : Level<undefined>
    ) {
        super(Method.PUT, body);
    }

}