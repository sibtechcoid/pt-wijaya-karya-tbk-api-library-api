import Path from "../../create/path/path";
import Method from "../method/method";
import Type from "../../type";
import Validator from "../../../../../validator/validator";
import Limit from "../../../../../limit/limit";
import Data from "../request/data/data";

export default interface Route extends Path, Validator<Data>, Method {

}