import DeleteRequest from '../../../../../delete/request/request';
import BaseRequest from '../../base/request/request';
import Id from "../../../../../id/id";
import Method from "../../../../../method/method";

export default interface Request extends BaseRequest<Method.DELETE,  Id[]>, DeleteRequest<'/qpass/place/level'>  {

}