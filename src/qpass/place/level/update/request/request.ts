import Level from "../../level";
import BaseRequest from "../../base/request/request";
import Method from "../../../../../method/method";
import Id from "../../../../../id/id";

export default interface Request extends BaseRequest<Method.PATCH, Level & Id> {

}