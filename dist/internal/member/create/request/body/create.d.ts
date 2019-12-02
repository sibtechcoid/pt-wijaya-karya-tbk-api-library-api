import Member from "./body";
export default class Create implements Member {
    project: number;
    user: number;
    position: number;
    constructor(project: number, user: number, position: number);
}
