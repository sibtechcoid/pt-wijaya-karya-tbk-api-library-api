import Request from './request';
import BaseStandard from '../../base/request/standard';
import Text from "../../../../../find/text/text";
import Method from "../../../../../method/type/type";

export default class Standard extends BaseStandard<Method.POST, Text> implements Request {

    constructor(
        body : Text
    ) {
        super(Method.POST, body);
    }

}