import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Body from "./body/body";

export default function Create(type : Body) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Body>(type))
}