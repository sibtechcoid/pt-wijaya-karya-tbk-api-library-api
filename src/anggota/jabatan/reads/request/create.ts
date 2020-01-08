import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import ReadCreate from "../../../../method/read-create";
import Body from "./body/body";


export default function Create(body : Body) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Body>(body))
}