import Body from "../../../../body/body";
import Authorization from "./authorization/authorization";
import Path from "./path/path";
import Method from "./method/method";

export default interface Request extends Body<Authorization>, Path, Method {

}