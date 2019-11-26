import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";
import Status from "../status/status";
import Object from "../../../../object/read/response/object/object";
import Member from "../../../../member/read/response/member/member";
import Schedule from "../../../../../schedule/schedule";


export default interface Project extends Record, Deactivated, Id, Schedule {

    status : Status;
    object : Omit<Object, "type">;
    members : Member[]
}