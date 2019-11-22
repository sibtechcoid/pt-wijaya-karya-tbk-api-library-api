import Request from './request';
import CreatBody from "../../../../body/create";
import Path from "../../create/request/path/create";
import Position from "../../create/request/position/position";
import Id from "../../../../id/id";
import Update from "../../../../method/update-create";

export default function Create(types : Position & Id) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Position & Id>(types))
}