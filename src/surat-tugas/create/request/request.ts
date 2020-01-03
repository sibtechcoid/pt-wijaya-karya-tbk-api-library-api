import Body from "../../../body/body";
import Path from "./path/path";
import Object from "./body/body";
import Method from "./method/method";

export default interface Request extends Body<Object>, Path, Method {

}