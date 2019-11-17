import Path from "../request/path/path";
import Validator from "../../../../../validator/validator";
import Method from "../request/method/method";
import Activable from "../../../../../activable/activable";

export default interface Route extends Path, Validator<Activable>, Method {

}