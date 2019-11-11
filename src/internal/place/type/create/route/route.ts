import Type from "../../type";
import Path from "../path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";

export default interface Route extends Path, Validator<Type[]>, Method {

}