import Member from "../member/member";
import Schedule from "../../../../../schedule/create/request/body/body";

export default interface Body extends Schedule {

    object : number;
    members : Member[];
}