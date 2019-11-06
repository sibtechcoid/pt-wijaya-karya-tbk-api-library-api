import Level from "../../level";
import BaseRequest from "../../base/request/request";
import Method from "../../../../../method/method";

export default interface Request extends BaseRequest<Method.PATCH, Level<number>> {

}