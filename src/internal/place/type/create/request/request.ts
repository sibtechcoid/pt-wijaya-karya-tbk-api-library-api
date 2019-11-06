import BaseRequest from '../../base/request/request';
import Type from "../../type";
import Method from "http-method-enum";

export default interface Request extends BaseRequest<Method.PUT, Type<undefined>> {

}