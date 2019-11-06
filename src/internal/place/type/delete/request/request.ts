import DeleteRequest from '../../../../../delete/request/request';
import BaseRequest from '../../base/request/request';
import Id from "../../../../../id/id";
import Method from "../../../../../method/method";

export default interface Request extends BaseRequest<Method.DELETE,  Id<number>[]>, DeleteRequest<'/internal/place/type'>  {

}