import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Object from "../../create/request/object/object";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";

export default function Create(types : Object & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Object & Id>(types))
}