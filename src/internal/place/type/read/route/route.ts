import Path from "../../create/path/path";
import Method from "../method/method";
import Validator from "../../../../../validator/validator";
import Data from "../request/data/data";

export default interface Route extends Path, Validator<Data>, Method {

}