import Body from "../../../../body/body";
import Access from "./access/access";
import Path from "./path/path";
import Method from "./method/method";

export default interface Request extends Body<Access>, Path, Method {

}