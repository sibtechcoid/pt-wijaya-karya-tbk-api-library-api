import Request from './request';
import CreatBody from "../../../../../body/create";
import CreateCreate from "../../../../../method/create-value";
import Path from "../../path/value";
import Type from "../../type";

export default function Create(place : Type) : Request {

    return Object.assign(CreateCreate, Path, new CreatBody<Type>(place))
}