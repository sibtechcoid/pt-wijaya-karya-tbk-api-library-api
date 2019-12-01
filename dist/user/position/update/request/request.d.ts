import BaseBody from "../../../../body/body";
import Path from "../../create/request/path/path";
import Body from "../../create/request/body/body";
import Id from "../../../../id/id";
import Method from "./method/method";
export default interface Request extends BaseBody<Body & Id>, Path, Method {
}
