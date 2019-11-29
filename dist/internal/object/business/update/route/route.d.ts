import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Business from "../../create/request/business/business";
import Validator from "../../../../../validator/validator";
import Id from "../../../../../id/id";
export default interface Route extends Path, Validator<Business & Id>, Method {
}
