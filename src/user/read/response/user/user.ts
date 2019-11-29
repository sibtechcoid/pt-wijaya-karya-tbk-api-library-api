import Record from "../../../../record/record";
import Deactivated from "../../../../deactivated/deactivated";
import Id from "../../../../id/id";
import Access from "../../../access/update/request/body/body";
import Position from "../../../position/create/request/body/body";

export default interface User extends Record, Deactivated, Id {

    access   : Access;

    position : Position|null;

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