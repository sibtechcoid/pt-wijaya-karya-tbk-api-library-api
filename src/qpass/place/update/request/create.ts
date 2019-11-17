import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Data from "../../create/request/place/data";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";

export default function Create(types : Data & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Data & Id>(types))
}