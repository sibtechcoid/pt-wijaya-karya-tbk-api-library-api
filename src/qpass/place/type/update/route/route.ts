import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Type from "../../create/request/type/type";
import Validator from "../../../../../validator/validator";
import Id from "../../../../../id/id";

export default interface Route extends Path, Validator<Type & Id>, Method {

}