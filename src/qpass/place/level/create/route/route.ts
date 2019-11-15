import Level from "../request/data/level";
import Path from "../request/path/path";
import Validator from "../../../../../validator/validator";
import Method from "../request/method/method";

export default interface Route extends Path, Validator<Level>, Method {

}