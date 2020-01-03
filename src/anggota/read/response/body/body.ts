import Status from "../../../status/status";
import Jabatan from "../../../jabatan/read/response/body/body";
import Group from "../../../jabatan/group/group";
import Akses from "../../../akses/create/request/body/body";
import User from "../../../../user/read/response/body/body";
import Record from "../../../../record/record";
import Id from "../../../../id/id";

export default interface Body extends /*BaseMember<Status, Akses, Group, Jabatan>, */ Record, Id {

    status: Status;
    //akses: Akses;
    jabatan: Omit<Jabatan, 'akses'>;
    //statusDate: string | null;
    user: Omit<User,'extraAkses'|'jabatan'|'akses'>;

    //akses : Akses;

   // action : Action;
   // actionDate : string|null;
}

