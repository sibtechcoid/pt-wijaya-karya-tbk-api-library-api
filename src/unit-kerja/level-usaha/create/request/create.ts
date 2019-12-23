import Request from './request';
import CreatBody from "../../../../body/create";
import CreateCreate from "../../../../method/create-create";
import Path from "./path/create";
import LevelUsaha from "./body/body";

export default function Create(type : LevelUsaha) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<LevelUsaha>(type))
}