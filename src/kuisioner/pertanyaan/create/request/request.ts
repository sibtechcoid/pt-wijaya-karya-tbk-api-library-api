import BaseBody from "../../../../body/body";
import Path from "./path/path";
import Type from "./body/body";
import Method from "./method/method";

export default interface Request extends BaseBody<Type>, Path, Method {

}