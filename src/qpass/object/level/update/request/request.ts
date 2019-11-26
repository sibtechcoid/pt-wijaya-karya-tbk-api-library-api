import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Data from "../../create/request/level/level";
import Id from "../../../../../id/id";
import Method from "./method/method";

export default interface Request extends Body<Data & Id>, Path, Method {

}