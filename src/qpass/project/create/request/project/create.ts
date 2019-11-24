import Project from "./project";
import Member from "../member/member";

export default class Create implements Project {

    constructor(
        public planned : [Date|string, Date|string],
        public realize : [Date|string, Date|string],
        public place : number,
        public members : Member[],
    ) {}
}