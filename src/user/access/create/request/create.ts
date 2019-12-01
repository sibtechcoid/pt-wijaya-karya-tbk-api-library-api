import Request from './request';
import Path from "./path/create";
import CreatBody from "../../../../body/create";
import Body from "./body/body";
import Method from "../../../../method/create-create";
import Id from "../../../../id/id";

export default function Create(text : Body) : Request {

    return Object.assign(Method(), Path(), new CreatBody<Body>(text))
}