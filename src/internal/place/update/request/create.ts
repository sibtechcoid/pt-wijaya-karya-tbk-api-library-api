import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Place from "../../create/request/place/place";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";

export default function Create(types : Place & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Place & Id>(types))
}