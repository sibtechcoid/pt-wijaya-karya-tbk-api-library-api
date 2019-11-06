
import Id from "../../id/id";
import BaseRequest from "../../request/request";
import Method from "../../method/method";

export default interface Request<Path extends string> extends BaseRequest<Method.DELETE, Path, Id<number>[]> {

}