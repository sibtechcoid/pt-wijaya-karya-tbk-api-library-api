import Request from './request';
import CreatBody from "../../../body/create";
import Delete from "../../../method/delete-create";
import Path from "../../login/request/path/create";

export default function Create() : Request {

    return Object.assign(Delete(), Path(), new CreatBody<undefined>(undefined))
}