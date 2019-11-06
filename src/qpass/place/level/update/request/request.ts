import Type from "../../type";
import Method from "http-method-enum";
import BaseRequest from "../../base/request/request";

export default interface Request extends BaseRequest<Method.PATCH, Type<number>> {

}