import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Project from "./body/body";

export default function Create(type : Project) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Project>(type))
}