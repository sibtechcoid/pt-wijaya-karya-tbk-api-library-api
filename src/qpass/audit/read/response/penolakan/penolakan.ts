import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import User from "../../../../../user/reads/response/body/body";
import UserPosition from "../../../../../user/position/read/response/body/body";
import MemberPosition from "../../../../position/read/response/body/body";

export default interface Penolakan extends Id, Record {

    realize : [Date|string, Date|string],
    alasan : string,
    user : Omit<User,'extraAccess'|'position'|'access'>
    jabatan : Omit<UserPosition, 'access'>|null;
    jabatanMember: Omit<MemberPosition, 'access'>|null;
}
