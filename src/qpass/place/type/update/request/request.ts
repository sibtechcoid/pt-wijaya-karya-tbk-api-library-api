
import Type from "../../type";
import BaseRequest from "../../base/request/request";
import Id from "../../../../../id/id";
import Method from "../../../../../method/method";

export default interface Request extends BaseRequest<Method.PATCH, Type & Id> {

}