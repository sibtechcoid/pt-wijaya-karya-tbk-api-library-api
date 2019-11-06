import BaseRequest from '../../../../request/request';
import Update from "../update";
import Method from "../../../../method/method";

export default interface Request extends BaseRequest<Method.POST, '/user/authorization/update',Update> {

}