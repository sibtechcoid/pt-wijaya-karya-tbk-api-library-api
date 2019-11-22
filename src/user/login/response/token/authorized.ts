import Authorization from "../../../authorization/update/request/authorization/authorization";

export default interface Authorized {

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