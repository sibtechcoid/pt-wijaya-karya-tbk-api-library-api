import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Level from "./body/body";
import Update from "../../../../method/update-create";

export default function Create(types : Level) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Level>(types))
}