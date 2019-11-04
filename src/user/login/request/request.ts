import BaseRequest from '../../../request/request';
import Login from "../login";
import Method from "http-method-enum";

export default interface Request extends BaseRequest<Login> {

    readonly method : Method.POST;
    readonly path : 'user/login';
}