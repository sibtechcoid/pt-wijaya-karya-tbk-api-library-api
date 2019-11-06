import BaseRequest from '../../../request/request';
import Login from "../login";
import Method from "../../../method/method";

export default interface Request extends BaseRequest<Method.POST, '/user/login', Login> {

}