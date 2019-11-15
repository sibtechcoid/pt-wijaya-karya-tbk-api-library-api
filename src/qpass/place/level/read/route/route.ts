import Path from "../../create/request/path/path";
import Method from "../method/method";
import Level from "../../create/request/data/level";
import Validator from "../../../../../validator/validator";
import Limit from "../../../../../limit/limit";

export default interface Route extends Path, Validator<undefined>, Method {

}