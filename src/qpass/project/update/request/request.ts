import Body from "../../../../body/body";
import Path from "../../create/request/path/path";
import Project from "../../create/request/project/project";
import Id from "../../../../id/id";
import Method from "../method/method";

export default interface Request extends Body<Project & Id>, Path, Method {

}