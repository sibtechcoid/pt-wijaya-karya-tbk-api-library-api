import Body from "../../../../../body/body";
import Path from "./path/path";
import Level from "./level/level";
import Method from "./method/method";
export default interface Request extends Body<Level>, Path, Method {
}
