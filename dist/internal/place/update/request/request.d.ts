import Body from "../../../../body/body";
import Path from "../../create/request/path/path";
import Place from "../../create/request/place/place";
import Id from "../../../../id/id";
import Method from "../method/method";
export default interface Request extends Body<Place & Id>, Path, Method {
}
