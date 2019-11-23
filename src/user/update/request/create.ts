import Request from './request';
import CreatBody from "../../../body/create";
import Path from "../../create/request/path/create";
import User from "../../create/request/user/user";
import Id from "../../../id/id";
import Update from "../../../method/update-create";

export default function Create(types : User & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<User & Id>(types))
}