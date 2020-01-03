import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../path/create";
import ReadCreate from "../../../../../method/read-create";
import Body from "./body/body";


export default function Create(id : Body) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Body>(id))
}