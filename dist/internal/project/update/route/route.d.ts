import Path from "../../create/request/path/path";
import Method from "../method/method";
import Project from "../../create/request/project/project";
import Validator from "../../../../validator/validator";
import Id from "../../../../id/id";
export default interface Route extends Path, Validator<Project & Id>, Method {
}