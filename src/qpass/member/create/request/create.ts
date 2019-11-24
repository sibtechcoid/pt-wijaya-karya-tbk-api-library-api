import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Member from "./member/member";

export default function Create(type : Member) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Member>(type))
}