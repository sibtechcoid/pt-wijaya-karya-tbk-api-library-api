import Body from "../../../../../body/body";
import Path from "./path/path";
import Id from "../../../../../id/id";
import Method from "./method/method";
import Active from "../../../../../active/active";


export default interface Request extends Body<Active>, Path, Method {

}