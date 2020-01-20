import Path from "../../create/request/path/path";
import Validator from "../../../validator/validator";
import Method from "../request/method/method";
import Body from "../../../deactivate/update/request/body/body";

export default interface Route extends Path, Validator<Body>, Method {

}