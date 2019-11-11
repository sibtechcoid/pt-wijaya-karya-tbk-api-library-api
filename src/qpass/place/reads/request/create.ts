import Request from './request';
import CreatBody from "../../../../body/create";
import Place from "../../place";
import Path from "../../path/create";
import Read from "../../../../method/read-create";
import Limit from "../../../../limit/limit";

export default function Create(place : Limit) : Request {

    return Object.assign(Read(), Path(), new CreatBody<Limit>(place))
}