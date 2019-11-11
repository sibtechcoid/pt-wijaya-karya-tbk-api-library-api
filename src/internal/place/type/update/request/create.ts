import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/path/create";
import Limit from "../../../../../limit/limit";
import Type from "../../type";
import Id from "../../../../../id/id";
import UpdateCreate from "../../../../../method/update-create";

export default function Create(types : (Type & Id)[]) : Request {

    return Object.assign(UpdateCreate(), Path(), new CreatBody<(Type & Id)[]>(types))
}