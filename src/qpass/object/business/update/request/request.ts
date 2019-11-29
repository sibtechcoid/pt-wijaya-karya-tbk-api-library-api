import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Data from "./body/data";

export default interface Request extends Body<Data>, Path, Method {

}