import Request from './request';
import Path from "./path/create";
import CreatBody from "../../../../body/create";
import Access from "./access/access";
import Update from "../../../../method/update-create";
import Id from "../../../../id/id";

export default function Create(text : Access & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Access & Id>(text))
}