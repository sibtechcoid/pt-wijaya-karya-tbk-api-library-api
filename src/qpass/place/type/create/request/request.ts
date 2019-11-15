import Body from "../../../../../body/body";
import Path from "../request/path/path";
import Create from "../../../../../method/create";
import Data from "../../create/request/data/data";
import Method from "../method/method";

export default interface Request extends Body<Data>, Path, Method {

}