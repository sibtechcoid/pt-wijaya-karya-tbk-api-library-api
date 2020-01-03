import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Object from "./body/body";
import Update from "../../../../method/update-create";

export default function Create(types : Object) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Object>(types))
}