import Path from "../../create/path/path";
import Method from "../method/method";
import Level from "../../level";
import Validator from "../../../../../validator/validator";
import Id from "../../../../../id/id";

export default interface Route extends Path, Validator<Level & Id>, Method {

}