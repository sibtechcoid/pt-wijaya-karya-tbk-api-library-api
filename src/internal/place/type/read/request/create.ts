import Request from './request';
import CreatBody from "../../../../../body/create";
import Path from "../../create/request/path/create";
import ReadCreate from "../../../../../method/read-create";
import Data from "./data/data";

export default function Create(data : Data) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Data>(data))
}