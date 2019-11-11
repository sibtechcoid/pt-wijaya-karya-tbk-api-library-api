import Body from "../../../../../body/body";
import Path from "../path/path";
import Create from "../../../../../method/create";
import Type from "../../type";
import Method from "../method/method";

export default interface Request extends Body<Type>, Path, Method {

}