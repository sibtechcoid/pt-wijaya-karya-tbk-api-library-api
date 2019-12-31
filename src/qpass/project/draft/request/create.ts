import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "./path/create";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";
import Body from "../../update/request/body/body";

export default function Create(types : Body) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Body>(types))
}