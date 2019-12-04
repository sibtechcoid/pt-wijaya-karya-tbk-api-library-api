import Path from "../../submit/request/path/path";
import Method from "../request/method/method";
import Validator from "../../../../validator/validator";
export default interface Route extends Path, Validator<undefined>, Method {
}
