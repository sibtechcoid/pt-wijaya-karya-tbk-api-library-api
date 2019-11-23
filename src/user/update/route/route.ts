import Path from "../../create/request/path/path";
import Method from "../method/method";
import User from "../../create/request/user/user";
import Validator from "../../../validator/validator";
import Id from "../../../id/id";

export default interface Route extends Path, Validator<User & Id>, Method {

}