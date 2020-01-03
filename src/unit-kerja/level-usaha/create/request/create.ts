import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Level from "./body/body";

export default function Create(type : Level) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Level>(type))
}