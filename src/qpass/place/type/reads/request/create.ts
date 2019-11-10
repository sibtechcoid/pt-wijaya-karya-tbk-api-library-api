import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../path/create";
import Limit from "../../../../../limit/limit";
import Read from "../../../../../method/read-create";

export default function Create(limit : Limit) : Request {

    return Object.assign(Read(), Path(), new CreatBody<Limit>(limit))
}