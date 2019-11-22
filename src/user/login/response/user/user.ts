import Access from "../../../access/update/request/access/access";
import Record from "../../../../record/record";
import Id from "../../../../id/id";
import Deactivated from "../../../../deactivated/deactivated";
import Position from "../../../position/create/request/position/position";

export default interface User extends Record, Id, Deactivated {

    token : string;

    authorization   : Access;

    position : Position;

    name            : string;

    user            : string;

    abbreviation    : string|null;

    phone           : string|null;

    email           : string|null;

    nip : string;

    active : boolean;

    positionWika : null|string;

    parentId : string|null;
}