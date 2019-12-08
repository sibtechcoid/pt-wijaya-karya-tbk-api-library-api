import BaseBody from "../../../../body/body";
import Path from "../../create/request/path/path";
import Method from "./method/method";
import Id from "../../../../id/id";

export default interface Request extends BaseBody<Id>, Path, Method {

}