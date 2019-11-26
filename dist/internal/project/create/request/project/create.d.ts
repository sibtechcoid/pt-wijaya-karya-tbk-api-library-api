import Project from "./project";
import Member from "../member/member";
import Category from "../category/category";
export default class Create implements Project {
    plan: [Date | string, Date | string];
    realize: [Date | string, Date | string];
    place: number;
    members: Member[];
    category: Category;
    constructor(plan: [Date | string, Date | string], realize: [Date | string, Date | string], place: number, members: Member[], category: Category);
}
