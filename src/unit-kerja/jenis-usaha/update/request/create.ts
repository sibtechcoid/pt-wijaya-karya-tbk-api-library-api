import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Update from "../../../../method/update-create";
import Data from "./body/body";

export default function Create(types : Data) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Data>(types))
}