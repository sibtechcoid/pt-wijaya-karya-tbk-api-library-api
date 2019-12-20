import Login from "./login/login";
import Body from "../../../body/body";
import Path from "./path/path";
import Method from "./method/method";


export default interface Request extends Body<Login>, Path, Method {

}