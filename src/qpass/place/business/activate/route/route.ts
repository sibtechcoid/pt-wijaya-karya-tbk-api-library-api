import Path from "../path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";
import Activable from "../../../../../activable/activable";

export default interface Route extends Path, Validator<Activable>, Method {

}