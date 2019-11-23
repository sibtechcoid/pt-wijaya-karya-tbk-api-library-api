import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Position from "./position/position";

export default function Create(type : Position) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Position>(type))
}