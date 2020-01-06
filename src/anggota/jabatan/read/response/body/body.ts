import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import CreateBody from "../../../create/request/body/body";
import Group from "../../../group/group";
import Deactivate from "../../../../../deactivate/read/response/body/body";

export default interface Body extends Id, Record, CreateBody, Deactivate {

    group : Group;
}