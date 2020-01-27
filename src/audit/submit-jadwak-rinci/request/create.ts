import Request from './request';
import CreatBody from "../../../body/create";
import Update from "../../../method/update-create";
import Path from "./path/create";
import Body from "./body/body";

export default function Create(type : Body) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Body>(type))
}