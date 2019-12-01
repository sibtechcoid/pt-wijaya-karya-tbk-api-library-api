import Body from "../../../../body/body";
import Path from "../../create/request/path/path";
import Object from "../../create/request/object/object";
import Id from "../../../../id/id";
import Method from "./method/method";

export default interface Request extends Body<Object & Id>, Path, Method {

}