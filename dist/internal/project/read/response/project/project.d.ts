import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";
import Status from "../status/status";
import Place from "../../../../place/read/response/place/place";
import Member from "../../../create/request/member/member";
export default interface Project extends Record, Deactivated, Id {
    planned: ["2019-12-16T20:24:00.000Z", "2020-12-16T20:24:00.000Z"];
    realized: ["0000-00-00 00:00:00", "0000-00-00 00:00:00"];
    status: Status;
    place: Omit<Place, "type">;
    members: Member[];
}
