import Data from "../../create/request/data/data";
import Path from "../../create/request/path/path";
import Validator from "../../../../../validator/validator";
import Method from "../method/method";

export default interface Route extends Path, Validator<Data>, Method {

}