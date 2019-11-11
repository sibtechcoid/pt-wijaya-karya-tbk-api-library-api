import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/path/create";
import Business from "../../business";
import Id from "../../../../../id/id";
import Update from "../../../../../method/update-create";

export default function Create(types : (Business & Id)[]) : Request {

    return Object.assign(Update(), Path(), new CreatBody<(Business & Id)[]>(types))
}