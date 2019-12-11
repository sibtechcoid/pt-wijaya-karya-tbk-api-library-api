import Request from './request';
import Path from "./path/create";
import CreatBody from "../../../../body/create";
import Body from "./body/body";
import Update from "../../../../method/update-create";

export default function Create(text : Body) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Body>(text))
}