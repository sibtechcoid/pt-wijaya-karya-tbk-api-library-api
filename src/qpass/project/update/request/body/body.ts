import Member from "../../../../../member/create/request/body/body";
import Schedule from "../../../../../schedule/update/request/body/body";
import Id from "../../../../../id/id";
import Status from "../../../status/status";

export default interface Body extends Schedule, Id {

    status ? : Status;
    object ? : number;
    members ? : Member[];
}