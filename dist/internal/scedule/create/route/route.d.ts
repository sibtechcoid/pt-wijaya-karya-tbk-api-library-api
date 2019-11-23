import Schedule from "../request/schedule/schedule";
import Path from "../request/path/path";
import Validator from "../../../../validator/validator";
import Method from "../request/method/method";
export default interface Route extends Path, Validator<Schedule>, Method {
}
