import BaseRequest from '../../base/request/request';
import Id from "../../../../../id/id";
import Method from "../../../../../method/method";

export default interface Request extends BaseRequest<Method.POST, Id[]> {

}