import Login from "../login";
import Path from "../path/path";
import Validator from "../../../validator/validator";
import Method from "../method/method";

export default interface Route extends Path, Validator<Login>, Method {

}