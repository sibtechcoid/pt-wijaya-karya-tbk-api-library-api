import Request from './request';
import CreatBody from "../../../../../body/create";
import CreateCreate from "../../../../../method/create-create";
import Path from "./path/create";
import Data from "./data/data";

export default function Create(type : Data) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Data>(type))
}