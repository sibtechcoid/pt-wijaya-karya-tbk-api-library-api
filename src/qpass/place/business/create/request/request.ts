import Body from "../../../../../body/body";
import Path from "../path/path";
import Create from "../../../../../method/create";
import Business from "../../business";
import Method from "../method/method";

export default interface Request extends Body<Business>, Path, Method {

}