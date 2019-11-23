import Body from "../../../../body/body";
import Path from "./path/path";
import Schedule from "./schedule/schedule";
import Method from "./method/method";
export default interface Request extends Body<Schedule>, Path, Method {
}
