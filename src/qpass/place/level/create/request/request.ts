import Body from "../../../../../body/body";
import Path from "../path/path";
import Create from "../../../../../method/create";
import Level from "../../level";
import Method from "../method/method";

export default interface Request extends Body<Level>, Path, Method {

}