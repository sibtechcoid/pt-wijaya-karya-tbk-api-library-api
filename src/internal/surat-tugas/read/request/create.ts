import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import ReadCreate from "../../../../method/read-create";
import Body from "../../../../deactivate/read/request/body/body";

export default function Create(deactivated : Body) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Body>(deactivated))
}