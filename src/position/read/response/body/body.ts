import CreateBody from "../../../create/request/body/body";
import Id from "../../../../id/id";
import Record from "../../../../record/record";

export default interface Body<Access, Group> extends CreateBody<Access, Group>, Id, Record {

}