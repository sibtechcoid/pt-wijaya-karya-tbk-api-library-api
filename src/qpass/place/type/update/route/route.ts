import Path from "../../path/path";
import Method from "../method/method";
import Type from "../../type";
import Validator from "../../../../../validator/validator";

export default interface Route extends Path, Validator<Type>, Method {

}