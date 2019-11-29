import BaseBody from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Body from "../../create/request/body/body";
import Id from "../../../../../id/id";
import Method from "../request/method/method";
import Data from "./body/data";

export default interface Request extends BaseBody<Data>, Path, Method {

}