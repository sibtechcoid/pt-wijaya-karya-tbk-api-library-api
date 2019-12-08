import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Project from "./body/body";
import Update from "../../../../method/update-create";

export default function Create(types : Project) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Project>(types))
}