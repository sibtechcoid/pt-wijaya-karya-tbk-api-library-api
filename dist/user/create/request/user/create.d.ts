import User from "./user";
export default class Create implements User {
    name: string;
    user: string;
    abbreviation: string;
    phone: string;
    email: string;
    nip: string;
    constructor(name: string, user: string, abbreviation: string, phone: string, email: string, nip: string);
}
