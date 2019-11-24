import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/request/path/create";
import Type from "../../create/request/type/type";
import Id from "../../../../../id/id";
import Update from "../../../../../method/update-create";

export default function Create(types : Type & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Type & Id>(types))
}