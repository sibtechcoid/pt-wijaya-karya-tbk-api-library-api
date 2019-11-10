import Request from './request';
import CreatBody from "../../../../../body/create";
import CreateCreate from "../../../../../method/create-value";
import Path from "../../path/create";
import Id from "../../../../../id/id";

export default function Create(place : Id[]) : Request {

    return Object.assign(CreateCreate, Path, new CreatBody<Id[]>(place))
}