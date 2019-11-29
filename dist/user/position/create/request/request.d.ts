import Body from "../../../../body/body";
import Path from "./path/path";
import Position from "./position/position";
import Method from "./method/method";
export default interface Request extends Body<Position>, Path, Method {
}
