import Level from "../../level";
import Path from "../../create/path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";
import Id from "../../../../../id/id";

export default interface Route extends Path, Validator<Id[]>, Method {

}