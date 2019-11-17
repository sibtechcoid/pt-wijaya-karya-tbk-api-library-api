import Body from "../../../../body/body";
import Path from "./path/path";
import Create from "../../../../method/create";
import Data from "./place/data";
import Method from "./method/method";

export default interface Request extends Body<Data>, Path, Method {

}