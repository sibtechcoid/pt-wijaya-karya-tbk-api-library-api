import Body from "../../../../../body/body";
import Path from "../../path/path";
import Limit from "../../../../../limit/limit";
import Read from "../../../../../method/read";
import Method from "../method/method";

export default interface Request extends Body<Limit>, Path, Method {

}