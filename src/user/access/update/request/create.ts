import Request from './request';
import Path from "./path/create";
import CreatBody from "../../../../body/create";
import Access from "./access/access";
import Update from "../../../../method/update-create";

export default function Create(text : Access) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Access>(text))
}