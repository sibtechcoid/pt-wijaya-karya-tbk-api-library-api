import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../path/value";
import Level from "../../level";
import Id from "../../../../../id/id";
import UpdateCreate from "../../../../../method/update-value";

export default function Create(types : (Level & Id)[]) : Request {

    return Object.assign(UpdateCreate, Path, new CreatBody<(Level & Id)[]>(types))
}