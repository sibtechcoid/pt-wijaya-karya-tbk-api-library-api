import Body from "../../../../../body/body";
import Path from "./path/path";
import Business from "./business/business";
import Method from "./method/method";
export default interface Request extends Body<Business>, Path, Method {
}