import Project from "./project";
import Member from "../member/member";
export default class Create implements Project {
    planned: [Date | string, Date | string];
    realize: [Date | string, Date | string];
    place: number;
    members: Member[];
    constructor(planned: [Date | string, Date | string], realize: [Date | string, Date | string], place: number, members: Member[]);
}
