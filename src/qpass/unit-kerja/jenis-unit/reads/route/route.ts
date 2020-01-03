import Path from "../path/path";
import Method from "../method/method";
import Validator from "../../../../../validator/validator";
import Body from "../../../../../deactivate/read/request/body/body";
import Id from "../../../../../id/id";

export default interface Route extends Path, Validator<Id>, Method {

}