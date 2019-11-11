import Path from "../../create/path/path";
import Method from "../method/method";
import Type from "../../type";
import Validator from "../../../../../validator/validator";
import Limit from "../../../../../limit/limit";

export default interface Route extends Path, Validator<undefined>, Method {

}