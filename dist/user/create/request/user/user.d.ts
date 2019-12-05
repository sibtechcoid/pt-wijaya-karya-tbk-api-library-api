import Body from "../../../update/request/body/body";
export default interface User extends Omit<Body, 'id'> {
    name: string;
    password: string;
    user: string;
    abbreviation: string;
    phone: string;
    email: string;
}
