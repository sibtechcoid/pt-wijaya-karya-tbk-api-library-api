import Path from "../../create/request/path/path";
import Method from "../method/method";
import Object from "../request/body/body";
import Validator from "../../../../validator/validator";

export default interface Route extends Path, Validator<Object>, Method {

}