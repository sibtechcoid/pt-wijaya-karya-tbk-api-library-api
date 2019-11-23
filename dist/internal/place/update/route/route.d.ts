import Path from "../../create/request/path/path";
import Method from "../method/method";
import Place from "../../create/request/place/place";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";
export default interface Route extends Path, Validator<Place & Id>, Method {
}
