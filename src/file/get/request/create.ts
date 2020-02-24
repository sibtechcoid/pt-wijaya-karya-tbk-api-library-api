import Request from './request';
import CreatBody from "../../../body/create";
import Path from "./path/create";
import Standard from "../../../method/standard";
import Type from "../../../method/type/type";

export default function Create(path : string) : Request {

    return Object.assign(new Standard(Type.GET), Path(path), new CreatBody<undefined>(undefined))
}