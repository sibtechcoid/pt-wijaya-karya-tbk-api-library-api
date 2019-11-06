
import Place from "../../place";
import Method from "http-method-enum";
import BaseRequest from "../../base/request/request";
import Id from "../../../../id/id";

export default interface Request extends BaseRequest<Method.PATCH, Place<number>> {

}