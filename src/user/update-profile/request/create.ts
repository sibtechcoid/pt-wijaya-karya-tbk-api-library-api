import Request from './request';
import CreatBody from "../../../body/create";
import Path from "./path/create";
import Update from "../../../method/update-create";
import User from "./body/body";

export default function Create(types : User) : Request {

    return Object.assign(Update(), Path(), new CreatBody<User>(types))
}