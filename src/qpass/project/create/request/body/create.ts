import Body from "./body";
import Member from "../member/member";

export default class Create implements Body {

    constructor(
        public plan : [Date|string, Date|string],
        public realize : [Date|string, Date|string],
        public object : number,
        public members : Member[],
    ) {}
}