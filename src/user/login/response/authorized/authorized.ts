import Authorization from "../../../authorization/update/request/authorization/authorization";
import Record from "../../../../record/record";
import Id from "../../../../id/id";
import Deactivated from "../../../../deactivated/deactivated";

export default interface Authorized extends Record, Id, Deactivated {

    token : string;

    authorization   : Authorization;

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