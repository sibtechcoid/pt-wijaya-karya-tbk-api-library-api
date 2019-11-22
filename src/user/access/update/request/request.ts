import Body from "../../../../body/body";
import Access from "./access/access";
import Path from "./path/path";
import Method from "./method/method";
import Id from "../../../../id/id";

export default interface Request extends Body<Access & Id>, Path, Method {

}