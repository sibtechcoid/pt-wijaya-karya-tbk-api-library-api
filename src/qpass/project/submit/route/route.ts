import Path from "../../submit/request/path/path";
import Method from "../request/method/method";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";
import Body from "../../update/request/body/body";

export default interface Route extends Path, Validator<Body>, Method {

}