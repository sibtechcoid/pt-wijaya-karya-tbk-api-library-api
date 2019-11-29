import Body from "../../../../body/body";
import Path from "./path/path";
import Member from "./member/member";
import Method from "./method/method";
export default interface Request extends Body<Member>, Path, Method {
}
