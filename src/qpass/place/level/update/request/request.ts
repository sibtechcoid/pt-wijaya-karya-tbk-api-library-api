import Body from "../../../../../body/body";
import Path from "../../create/path/path";
import Level from "../../level";
import Id from "../../../../../id/id";
import Method from "../method/method";

export default interface Request extends Body<Level & Id>, Path, Method {

}