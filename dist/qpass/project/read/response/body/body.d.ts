import Object from "../../../../object/read/response/body/body";
import Member from "../../../../member/read/response/body/body";
import ProjectStatus from "../../../status/status";
import Type from "../../../type/type";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Id from "../../../../../id/id";
import Schedule from "../../../../../schedule/read/response/body/body";
import Record from "../../../../../record/record";
import User from "../../../../../user/reads/response/body/body";
import Penolakan from "../penolakan/penolakan";
export default interface Body extends /*BaseProject<MemberStatus, ProjectStatus, Group, Position, Member, Object>,*/ Deactivate, Id, Schedule, Record {
    status: ProjectStatus;
    object: Object;
    members: Omit<Member, 'access' | 'created' | 'updated' | 'id'>[];
    type: Type;
    penyetuju: Omit<User, 'extraAccess' | 'position' | 'access'> | null;
    menolakan: Penolakan[];
}
