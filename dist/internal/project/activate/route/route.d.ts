import Path from "../request/path/path";
import Validator from "../../../../validator/validator";
import Method from "../request/method/method";
import Active from "../../../../active/active";
export default interface Route extends Path, Validator<Active>, Method {
}
