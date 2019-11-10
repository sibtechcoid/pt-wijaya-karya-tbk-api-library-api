import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../path/value";
import Limit from "../../../../../limit/limit";
import ReadCreate from "../../../../../method/read-create";

export default function Create(limit : Limit) : Request {

    return Object.assign(ReadCreate, Path, new CreatBody<Limit>(limit))
}