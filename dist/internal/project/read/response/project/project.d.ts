import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";
import Status from "../status/status";
import Place from "../../../../object/read/response/object/object";
import Member from "../../../../member/read/response/member/member";
export default interface Project extends Record, Deactivated, Id {
    plan: [string, string];
    realize: [string, string];
    status: Status;
    place: Omit<Place, "type">;
    members: Member[];
}
