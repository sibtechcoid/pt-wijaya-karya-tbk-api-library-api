import Member from "./member";
export default class Create implements Member {
    project: number;
    user: number;
    position: number;
    constructor(project: number, user: number, position: number);
}
