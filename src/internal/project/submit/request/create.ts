import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "./path/create";
import Project from "../../create/request/body/body";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";

export default function Create(types : Project & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Project & Id>(types))
}