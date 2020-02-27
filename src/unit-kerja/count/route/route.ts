import Path from "../request/path/path";
import Method from "../request/method/method";
import Validator from "../../../validator/validator";
import Where from "../../reads/request/body/where/where";

export default interface Route extends Path, Validator<Where>, Method {

}
