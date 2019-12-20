import Body from "../../../body/body";
import Path from "../../sign-in/request/path/path";
import Method from "./method/method";

export default interface Request extends Body<undefined>, Path, Method {

}