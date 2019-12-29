import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Validator from "../../../validator/validator";
import Body from "../request/body/body";
import Id from "../../../id/id";


export default interface Route extends Path, Validator<Id>, Method {

}