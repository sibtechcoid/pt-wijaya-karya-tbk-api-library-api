import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/path/create";
import Level from "../../level";
import Id from "../../../../../id/id";
import Update from "../../../../../method/update-create";

export default function Create(types : Level & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Level & Id>(types))
}