import Request from './request';
import CreatBody from "../../../../body/create";
import Place from "../../place";
import Path from "../../path/value";
import ReadCreate from "../../../../method/read-create";
import Limit from "../../../../limit/limit";

export default function Create(place : Limit) : Request {

    return Object.assign(ReadCreate, Path, new CreatBody<Limit>(place))
}