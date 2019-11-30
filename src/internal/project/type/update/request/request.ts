import BaseBody from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Type from "../../create/request/type/type";
import Id from "../../../../../id/id";
import Method from "../method/method";

export default interface Request extends BaseBody<Type & Id>, Path, Method {

}