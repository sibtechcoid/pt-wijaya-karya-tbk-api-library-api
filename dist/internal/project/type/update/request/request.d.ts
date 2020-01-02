import BaseBody from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Type from "../request/body/body";
import Method from "../method/method";
export default interface Request extends BaseBody<Type>, Path, Method {
}
