import Body from "../../../../body/body";
import Path from "./path/path";
import Id from "../../../../id/id";
import Method from "./method/method";
import Activable from "../../../../activable/activable";


export default interface Request extends Body<Activable>, Path, Method {

}