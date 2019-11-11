import Request from './request';
import CreatBody from "../../../../../body/create";
import CreateCreate from "../../../../../method/create-create";
import Path from "../path/create";
import Business from "../../business";

export default function Create(type : Business[]) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Business[]>(type))
}