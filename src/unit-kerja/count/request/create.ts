import Request from './request';
import CreatBody from "../../../body/create";
import Path from "./path/create";
import ReadCreate from "../../../method/read-create";
import Where from "../../reads/request/body/where/where";


export default function Create(body : Where) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Where>(body))
}
