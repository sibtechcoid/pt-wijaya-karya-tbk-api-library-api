import BaseBody from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Id from "../../../../../id/id";
import Method from "../request/method/method";
import Body from "./body/body";

export default interface Request extends BaseBody<Body>, Path, Method {

}