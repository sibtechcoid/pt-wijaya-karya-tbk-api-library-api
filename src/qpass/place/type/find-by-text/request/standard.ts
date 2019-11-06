import Request from './request';
import Type from "../../type";
import BaseStandard from '../../base/request/standard';
import Text from "../../../../../find/text/text";
import Method from "../../../../../method/method";

export default class Standard extends BaseStandard<Method.POST, Text> implements Request {

    constructor(
        body : Text
    ) {
        super(Method.POST, body);
    }

}