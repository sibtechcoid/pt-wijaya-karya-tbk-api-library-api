import Place from "./place";
import Type from "../../../type/create/request/type/type";
export default class Create implements Place {
    name: string;
    abbreviation: string;
    address: string;
    type: Type;
    wikaDesc: string;
    wikaSlug: string;
    wikaAttach: string;
    id: number;
    created: string;
    updated: string;
    deactivated: string | null;
    constructor(name: string, abbreviation: string, address: string, type: Type, wikaDesc: string, wikaSlug: string, wikaAttach: string, id: number, created: string, updated: string, deactivated: string | null);
}
