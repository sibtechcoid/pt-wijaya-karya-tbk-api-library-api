import Request from './request';
import CreatBody from "../../../../body/create";
import Delete from "../../../../method/delete-create";
import Path from "../path/create";
import Activable from "../../../../activable/activable";

export default function Create(activable : Activable) : Request {

    return Object.assign(Delete(), Path(), new CreatBody<Activable>(activable))
}