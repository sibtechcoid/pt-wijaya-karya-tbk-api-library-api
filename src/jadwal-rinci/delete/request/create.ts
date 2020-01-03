import Request from './request';
import CreatBody from "../../../body/create";
import Path from "../../create/request/path/create";
import Delete from "../../../method/delete-create";
import Id from "../../../id/id";

export default function Create(types : Id) : Request {

    return Object.assign(Delete(), Path(), new CreatBody<Id>(types))
}