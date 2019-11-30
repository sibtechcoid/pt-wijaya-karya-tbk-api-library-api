import Path from "../path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";
import Body from "../../../../../deactivate/update/request/body/body";
export default interface Route extends Path, Validator<Body>, Method {
}
