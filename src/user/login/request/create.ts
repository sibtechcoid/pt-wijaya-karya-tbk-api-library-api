import Request from './request';
import CreatBody from "../../../body/create";
import Read from "../../../method/read-create";
import Path from "../path/create";
import Login from "../login";

export default function Create(login : Login) : Request {

    return Object.assign(Read(), Path(), new CreatBody<Login>(login))
}