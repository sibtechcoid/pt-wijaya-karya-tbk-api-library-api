import Path from "../../create/request/path/path";
import Method from "../method/method";
import Data from "../../create/request/data/data";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";

export default interface Route extends Path, Validator<Data & Id>, Method {

}