import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Schedule from "./schedule/schedule";

export default function Create(type : Schedule) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Schedule>(type))
}