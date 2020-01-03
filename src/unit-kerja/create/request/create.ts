import Request from './request';
import CreatBody from "../../../body/create";
import CreateCreate from "../../../method/create-create";
import Path from "./path/create";
import UnitKerja from "./body/body";

export default function Create(unitKerja : UnitKerja) : Request {

    return Object.assign(CreateCreate(), Path(), new CreatBody<UnitKerja>(unitKerja))
}