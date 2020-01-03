import Request from './request';
import CreatBody from "../../../body/create";
import Path from "./path/create";
import ReadCreate from "../../../method/read-create";

import Id from "../../../id/id";

export default function Create(deactivated : Id) : Request {

    return Object.assign(ReadCreate(), Path(), new CreatBody<Id>(deactivated))
}