import Request from './request';
import CreatBody from "../../../../../body/create";
import DeleteCreate from "../../../../../method/delete-create";
import Path from "../../create/path/create";
import Id from "../../../../../id/id";

export default function Create(place : Id[]) : Request {

    return Object.assign(DeleteCreate(), Path(), new CreatBody<Id[]>(place))
}