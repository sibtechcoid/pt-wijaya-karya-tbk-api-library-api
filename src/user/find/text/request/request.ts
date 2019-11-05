import BaseRequest from '../../../../request/request';
import Text from "../text";
import Method from "http-method-enum";

export default interface Request extends BaseRequest<Text> {

    readonly method : Method.POST;
    readonly path : '/user/find/text';
}