import Record from "../../../../record/record";
import Body from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Access from "../../../access/update/request/body/body";
import Position from "../../../position/read/response/body/body";
export default interface User extends Record, Body, Id {
    access: Access;
    position: Omit<Position, 'access'> | null;
    name: string;
    user: string;
    abbreviation: string | null;
    phone: string | null;
    email: string | null;
    nip: string;
    active: boolean;
    positionWika: null | string;
    parentId: string | null;
}
