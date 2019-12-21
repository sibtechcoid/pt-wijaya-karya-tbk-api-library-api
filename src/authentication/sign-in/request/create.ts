import Request from './request';
import CreatBody from "../../../body/create";
import CreateCreate from "../../../method/create-create";
import Path from "./path/create";
import Login from "./login/login";

export default function Create(login : Login) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Login>(login))
}