import Path from "../../create/request/path/path";
import Method from "../method/method";
import Validator from "../../../../validator/validator";
import Deactivated from "../../../../deactivated/deactivated";

export default interface Route extends Path, Validator<Deactivated>, Method {

}