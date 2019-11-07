import BaseRequest from '../../base/request/request';
import Id from "../../../../../id/id";
import HttpMethod from "../../../../../method/method";

export default interface Request extends BaseRequest<HttpMethod.POST, Id> {

}