import BaseRequest from '../../base/request/request';
import Place from "../../place";
import Method from "http-method-enum";

export default interface Request extends BaseRequest<Method.PUT, Place<undefined>> {

}