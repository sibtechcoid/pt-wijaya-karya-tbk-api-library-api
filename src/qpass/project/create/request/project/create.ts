import Project from "./project";
import Member from "../member/member";

export default class Create implements Project {

    constructor(
        public plan : [Date|string, Date|string],
        public realize : [Date|string, Date|string],
        public place : number,
        public members : Member[],
    ) {}
}