import Business from "../../business";
import Path from "../path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";

export default interface Route extends Path, Validator<Business>, Method {

}