import Body from "./body";
export default class Create implements Body {
    username: string;
    password: string;
    constructor(username: string, password: string);
}
