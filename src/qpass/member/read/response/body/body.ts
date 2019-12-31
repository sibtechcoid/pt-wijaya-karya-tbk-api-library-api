import Status from "../../../status/status";
import Position from "../../../../position/read/response/body/body";
import Group from "../../../../position/group/group";
import Access from "../../../../access/create/request/body/body";
import User from "../../../../../user/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";

export default interface Body extends /*BaseMember<Status, Access, Group, Position>, */ Record, Id {

    status: Status;
    //access: Access;
    position: Omit<Position, 'access'>;
    //statusDate: string | null;
    user: Omit<User,'extraAccess'|'position'|'access'>;
    group : Group;
    access : Access;

   // action : Action;
   // actionDate : string|null;
}

