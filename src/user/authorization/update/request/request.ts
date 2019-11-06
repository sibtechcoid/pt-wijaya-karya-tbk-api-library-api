import BaseRequest from '../../../../request/request';
import Method from "http-method-enum";
import Update from "../update";

export default interface Request extends BaseRequest<Method.POST, '/user/authorization/update',Update> {

}