import Request from './request';
import CreatBody from "../../../body/create";
import CreateCreate from "../../../method/create-create";
import Path from "./path/create";
import User from "./user/user";

export default function Create(type : User) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<User>(type))
}