import Path from "../../create/request/path/path";
import Method from "../request/method/method";
import Project from "../request/body/body";
import Validator from "../../../../validator/validator";

export default interface Route extends Path, Validator<Project>, Method {

}