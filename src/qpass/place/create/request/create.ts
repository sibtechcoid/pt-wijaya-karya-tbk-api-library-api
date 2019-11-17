import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import Place from "./place/place";

export default function Create(type : Place) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Place>(type))
}