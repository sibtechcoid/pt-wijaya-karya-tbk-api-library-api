import Request from './request';
import CreatBody from "../../../body/create";
import Path from "./path/create";
import Update from "../../../method/update-create";
import Body from ".//body/body";

export default function Create(types : Body) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Body>(types))
}