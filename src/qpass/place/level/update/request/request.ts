import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Level from "../../create/request/data/level";
import Id from "../../../../../id/id";
import Method from "../method/method";

export default interface Request extends Body<Level & Id>, Path, Method {

}