import Body from "../../../../body/body";
import Path from "./path/path";
import Create from "../../../../method/create";
import Data from "./data/data";
import Method from "./method/method";

export default interface Request extends Body<Data>, Path, Method {

}