import Member from "../../../../../member/member";
import Schedule from "../../../../../schedule/create/request/body/body";
import UpdateBody from "../../../update/request/body/body";

export default interface Body extends Schedule, Omit<UpdateBody,'plan'|'realize'> {

    object : number;
    members : Member[];
}