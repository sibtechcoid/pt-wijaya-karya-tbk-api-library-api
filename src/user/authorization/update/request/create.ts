import Request from './request';
import Path from "../../path/create";
import CreatBody from "../../../../body/create";
import Authorization from "../../authorization";
import Update from "../../../../method/update-create";

export default function Create(text : Authorization) : Request {

    return Object.assign(Update(), Path(), new CreatBody<Authorization>(text))
}