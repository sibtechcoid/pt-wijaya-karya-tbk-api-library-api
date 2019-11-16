import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/request/path/create";
import ReadCreate from "../../../../../method/read-create";
import Deactivated from "../../../../../deactivated/deactivated";

export default function Create(deactivated : Deactivated) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Deactivated>(deactivated))
}