import Path from "../request/path/path";
import Validator from "../../../../validator/validator";
import Method from "../request/method/method";
import Body from "../../../../deactivate/update/request/body/body";
import Id from "../../../../id/id";

export default interface Route extends Path, Validator<Id>, Method {

}
