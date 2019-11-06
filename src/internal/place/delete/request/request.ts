import DeleteRequest from '../../../../delete/request/request';
import BaseRequest from '../../base/request/request';
import Method from "http-method-enum";
import Id from "../../../../id/id";

export default interface Request extends BaseRequest<Method.DELETE,  Id<number>[]>, DeleteRequest<'/internal/place'>  {

}