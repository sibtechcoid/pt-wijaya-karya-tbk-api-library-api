import Record from "../../../../../record/record";
import Body from "../../../../../deactivate/read/response/body/body";
import Id from "../../../../../id/id";
import Status from "../status/status";
import Object from "../../../../object/read/response/object/object";
import Member from "../../../../member/read/response/member/member";
import Schedule from "../../../../../schedule/create/request/body/body";

export default interface Project extends Record, Body, Id, Schedule {
    status : Status;
    object : Omit<Object, "type">;
    members : Member[]
}