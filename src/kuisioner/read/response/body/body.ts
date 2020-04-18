import Id from "../../../../id/id";
import Record from "../../../../record/record";
import Group from "../../../../anggota/jabatan/group/group";
import Deactivate from "../../../../deactivate/read/response/body/body";


export default interface Body extends Id, Record, Deactivate {

    pertanyaan : string;
    dari  : Group;
}
