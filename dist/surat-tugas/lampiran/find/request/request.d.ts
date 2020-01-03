import BaseBody from "../../../../body/body";
import Path from "./path/path";
import Id from "../../../../id/id";
import Method from "./method/method";
export default interface Request extends BaseBody<Id>, Path, Method {
}
