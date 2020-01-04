import Path from "../../create/request/path/path";
import Method from "../method/method";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";

export default interface Route extends Path, Validator<Id>, Method {

}