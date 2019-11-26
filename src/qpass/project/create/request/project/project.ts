import Member from "../member/member";
import Schedule from "../../../../../schedule/schedule";

export default interface Project extends Schedule {

    object : number;
    members : Member[];
}