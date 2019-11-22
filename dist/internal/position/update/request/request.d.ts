import Body from "../../../../body/body";
import Path from "../../create/request/path/path";
import Position from "../../create/request/position/position";
import Id from "../../../../id/id";
import Method from "./method/method";
export default interface Request extends Body<Position & Id>, Path, Method {
}
