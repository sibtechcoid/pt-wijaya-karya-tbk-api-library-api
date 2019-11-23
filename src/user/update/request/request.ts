import Body from "../../../body/body";
import Path from "../../create/request/path/path";
import User from "../../create/request/user/user";
import Id from "../../../id/id";
import Method from "../method/method";

export default interface Request extends Body<User & Id>, Path, Method {

}