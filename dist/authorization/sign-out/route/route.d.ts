import Login from "../../sign-in/request/login/login";
import Path from "../../sign-in/request/path/path";
import Validator from "../../../validator/validator";
import Method from "../request/method/method";
export default interface Route extends Path, Validator<Login>, Method {
}
