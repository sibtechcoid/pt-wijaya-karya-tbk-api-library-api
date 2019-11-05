import BaseRequest from '../../../../request/request';
import Method from "http-method-enum";
import Update from "../update";

export default interface Request extends BaseRequest<Update> {

    readonly method : Method.POST;
    readonly path : '/user/authorization/update';
}