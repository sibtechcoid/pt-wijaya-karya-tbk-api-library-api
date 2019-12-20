import Request from './request';
import CreatBody from "../../../../body/create";
import Method from "../../../../method/update-create";
import Path from "./path/create";
import Body from "./body/body";

export default function Create(type : Body) : Request {

    return Object.assign(Method(), Path(), new CreatBody<Body>(type))
}