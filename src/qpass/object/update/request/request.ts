import BaseBody from "../../../../body/body";
import Path from "../../create/request/path/path";
import Body from "../request/body/body";
import Method from "./method/method";

export default interface Request extends BaseBody<Body>, Path, Method {

}