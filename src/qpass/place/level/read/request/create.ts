import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/request/path/create";
import Limit from "../../../../../limit/limit";
import ReadCreate from "../../../../../method/read-create";

export default function Create() : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<undefined>(undefined))
}