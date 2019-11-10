import Request from './request';
import CreatBody from "../../../../../body/create";
import CreateCreate from "../../../../../method/create-value";
import Path from "../../path/value";
import Limit from "../../../../../limit/limit";
import Type from "../../type";
import Id from "../../../../../id/id";
import UpdateCreate from "../../../../../method/update-value";

export default function Create(types : (Type & Id)[]) : Request {

    return Object.assign(UpdateCreate, Path, new CreatBody<(Type & Id)[]>(types))
}