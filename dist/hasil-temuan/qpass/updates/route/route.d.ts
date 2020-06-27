import Method from "../request/method/method";
import Body from "../request/body/body";
import Validator from "../../../../validator/validator";
import Path from "../request/path/path";
export default interface Route extends Path, Validator<Body>, Method {
}
