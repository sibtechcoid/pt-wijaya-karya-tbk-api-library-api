import Request from './request';
import CreatBody from "../../../body/create";
import Path from "./path/create";
import Object from "./body/body";
import ReadCreate from "../../../method/read-create";

export default function Create(type : Object) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Object>(type))
}
