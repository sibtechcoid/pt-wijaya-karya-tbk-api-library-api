import Status from "../../../status/status";
import Jabatan from "../../../jabatan/read/response/body/body";
import User from "../../../../user/read/response/body/body";
import Record from "../../../../record/record";
import Id from "../../../../id/id";
export default interface Body extends /*BaseMember<Status, Akses, Group, Jabatan>, */ Record, Id {
    status: Status;
    jabatan: Omit<Jabatan, 'akses'>;
    user: Omit<User, 'extraAkses' | 'jabatan' | 'akses'>;
}
