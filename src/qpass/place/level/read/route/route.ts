import Path from "../../create/request/path/path";
import Method from "../method/method";
import Data from "../../create/request/data/data";
import Validator from "../../../../../validator/validator";
import Limit from "../../../../../limit/limit";

export default interface Route extends Path, Validator<undefined>, Method {

}