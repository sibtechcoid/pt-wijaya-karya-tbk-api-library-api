import Data from "../../create/request/data/data";
import Path from "../../create/request/path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";
import Id from "../../../../../id/id";

export default interface Route extends Path, Validator<Id>, Method {

}