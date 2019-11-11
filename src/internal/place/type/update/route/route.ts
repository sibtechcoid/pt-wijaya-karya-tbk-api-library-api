import Path from "../../create/path/path";
import Method from "../method/method";
import Type from "../../type";
import Validator from "../../../../../validator/validator";
import Id from "../../../../../id/id";

export default interface Route extends Path, Validator<(Type & Id)[]>, Method {

}