import Request from './request';
import CreatBody from "../../../body/create";
import CreateCreate from "../../../method/create-create";
import Path from "./path/create";
import Object from "./body/body";

export default function Create(type : Object) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Object>(type))
}