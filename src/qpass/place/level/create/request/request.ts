import Body from "../../../../../body/body";
import Path from "../path/path";
import Create from "../method/method";
import Level from "../../level";

export default interface Request extends Body<Level>, Path, Create {

}