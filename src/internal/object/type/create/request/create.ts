import Request from './request';
import CreatBody from "../../../../../body/create";
import CreateCreate from "../../../../../method/create-create";
import Path from "./path/create";
import Type from "./type/type";

export default function Create(type : Type) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<Type>(type))
}