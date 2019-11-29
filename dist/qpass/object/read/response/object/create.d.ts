import Object from "./object";
import Business from "../../../business/read/response/business/business";
import Level from "../../../type/read/response/level/level";
export default class Create implements Object {
    id: number;
    created: string;
    updated: string;
    abbreviation: string;
    name: string;
    address: null | string;
    wikaParentId: null | number;
    wikaType: string;
    wikaId: number;
    deactivated: null;
    business: null | Business;
    level: null | Level;
    constructor(id: number, created: string, updated: string, abbreviation: string, name: string, address: null | string, wikaParentId: null | number, wikaType: string, wikaId: number, deactivated: null, business: null | Business, level: null | Level);
}
