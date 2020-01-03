import BaseBody from "../../../body/body";
import Path from "./path/path";
import Read from "../../../method/read";
import Body from "../../../deactivate/read/request/body/body";

export default interface Request extends BaseBody<Body>, Path, Read {

}