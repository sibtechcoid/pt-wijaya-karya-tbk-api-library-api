import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/request/path/create";
import Business from "../../create/request/business/business";
import Id from "../../../../../id/id";
import Update from "../../../../../method/update-create";

export default function Create(types : Business & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Business & Id>(types))
}