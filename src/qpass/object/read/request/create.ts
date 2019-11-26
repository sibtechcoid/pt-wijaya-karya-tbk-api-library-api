import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import ReadCreate from "../../../../method/read-create";
import Deactivate from "../../../../deactivate/deactivate";

export default function Create(deactivated : Deactivate) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Deactivate>(deactivated))
}