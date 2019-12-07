import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "./path/create";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";

export default function Create(types : Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Id>(types))
}