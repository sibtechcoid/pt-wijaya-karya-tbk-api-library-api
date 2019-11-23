import User from "./user";
import Access from "../../../access/update/request/access/access";
import Position from "../../../position/create/request/position/position";
export default class Create implements User {
    id: number;
    created: string;
    updated: string;
    token: string;
    access: Access;
    position: Position | null;
    name: string;
    user: string;
    abbreviation: string | null;
    phone: string | null;
    email: string | null;
    nip: string;
    active: boolean;
    positionWika: null | string;
    parentId: string | null;
    deactivated: null | string;
    constructor(id: number, created: string, updated: string, token: string, access: Access, position: Position | null, name: string, user: string, abbreviation: string | null, phone: string | null, email: string | null, nip: string, active: boolean, positionWika: null | string, parentId: string | null, deactivated: null | string);
}
