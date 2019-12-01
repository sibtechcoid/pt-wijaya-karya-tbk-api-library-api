import Project from "./project";
import Member from "../member/member";
import Category from "../category/category";

export default class Create implements Project {

    constructor(
        public plan : [Date|string, Date|string],
        public realize : [Date|string, Date|string],
        public object : number,
        public members : Member[],
        public category : Category
    ) {}
}