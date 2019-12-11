import Body from "../../../../../body/body";
import Path from "../../create/request/path/path";
import Object from "../request/body/body";
import Id from "../../../../../id/id";
import Method from "../method/method";

export default interface Request extends Body<Object>, Path, Method {

}