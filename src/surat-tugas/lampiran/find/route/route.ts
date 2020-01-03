import Path from "../request/path/path";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";
import Method from "../request/method/method";

export default interface Route extends Path, Validator<Id>, Method {

}