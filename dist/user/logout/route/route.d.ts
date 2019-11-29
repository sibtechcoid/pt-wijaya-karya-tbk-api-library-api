import Login from "../../login/request/login/login";
import Path from "../../login/request/path/path";
import Validator from "../../../validator/validator";
import Method from "../request/method/method";
export default interface Route extends Path, Validator<Login>, Method {
}
