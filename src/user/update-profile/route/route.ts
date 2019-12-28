import Path from "../request/path/path";
import Method from "../request/method/method";
import Profile from "../request/body/body";
import Validator from "../../../validator/validator";

export default interface Route extends Path, Validator<Profile>, Method {

}