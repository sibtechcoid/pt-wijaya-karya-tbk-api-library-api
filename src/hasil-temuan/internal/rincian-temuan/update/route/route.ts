import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Body from "../request/body/body";
import Validator from "../../../../../validator/validator";

export default interface Route extends Path, Validator<Body>, Method {

}