import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Validator from "../../../validator/validator";
import Body from "../request/body/body";

export default interface Route extends Path, Validator<Body>, Method {

}