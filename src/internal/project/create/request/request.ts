import Body from "../../../../body/body";
import Path from "./path/path";
import Create from "../../../../method/create";
import Project from "./project/project";
import Method from "./method/method";

export default interface Request extends Body<Project>, Path, Method {

}