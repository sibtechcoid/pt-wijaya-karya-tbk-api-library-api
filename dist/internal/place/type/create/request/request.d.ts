import Body from "../../../../../body/body";
import Path from "./path/path";
import Type from "./type/type";
import Method from "./method/method";
export default interface Request extends Body<Type>, Path, Method {
}
