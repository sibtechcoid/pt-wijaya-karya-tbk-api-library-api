import Path from "../path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";
import Active from "../../../../../active/active";

export default interface Route extends Path, Validator<Active>, Method {

}