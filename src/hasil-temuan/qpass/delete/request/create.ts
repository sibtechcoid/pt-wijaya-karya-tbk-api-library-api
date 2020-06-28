import Request from './request';
import CreatBody from "../../../../body/create";
import Delete from "../../../../method/delete-create";
import Path from "./path/create";
import Id from "../../../../id/id";

export default function Create(activable : Id) : Request {

    return Object.assign(Delete(), Path(), new CreatBody<Id>(activable))
}
