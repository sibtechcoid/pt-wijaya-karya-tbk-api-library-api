
import Method from "http-method-enum";
import Id from "../../id/id";
import BaseRequest from "../../request/request";

export default interface Request<Path extends string> extends BaseRequest<Method.DELETE, Path, Id<number>[]> {

}