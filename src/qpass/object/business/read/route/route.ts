import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Validator from "../../../../../validator/validator";
import Deactivate from "../../../../../deactivate/deactivate";

export default interface Route extends Path, Validator<Deactivate>, Method {

}