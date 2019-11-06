import BaseRequest from '../../base/request/request';
import Place from "../../place";
import Method from "../../../../method/method";

export default interface Request extends BaseRequest<Method.PUT, Place<undefined>> {

}