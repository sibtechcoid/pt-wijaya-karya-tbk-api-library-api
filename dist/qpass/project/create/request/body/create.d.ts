import Body from "./body";
import Member from "../member/member";
export default class Create implements Body {
    plan: [Date | string, Date | string];
    realize: [Date | string, Date | string];
    object: number;
    members: Member[];
    constructor(plan: [Date | string, Date | string], realize: [Date | string, Date | string], object: number, members: Member[]);
}
