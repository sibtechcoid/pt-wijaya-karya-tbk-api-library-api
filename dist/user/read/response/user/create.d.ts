import User from "./user";
export default class Create implements User {
    id: number;
    name: string;
    user: string;
    abbreviation: string;
    phone: string;
    email: string;
    nip: string;
    created: string;
    updated: string;
    deactivated: string | null;
    constructor(id: number, name: string, user: string, abbreviation: string, phone: string, email: string, nip: string, created: string, updated: string, deactivated: string | null);
}
