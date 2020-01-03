import Object from "../../../../unit-kerja/read/response/body/body";
import Member from "../../../../anggota/read/response/body/body";
import auditStatus from "../../../status/status";
import Type from "../../../type/type";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/read/response/body/body";
import Record from "../../../../record/record";
import User from "../../../../user/reads/response/body/body";
import Penolakan from "../penolakan/penolakan";

export default interface Body extends /*Baseaudit<Anggotatatus, auditStatus, Group, Jabatan, Member, Object>,*/ Deactivate, Id, Schedule, Record  {

    status : auditStatus;
    object : Object;
    anggota : Omit<Member,'akses'|'created'|'updated'|'id'>[]
    type : Type;
    penyetuju : Omit<User,'extraAkses'|'jabatan'|'akses'>|null
    penolakan : Penolakan[]
    //category : Category;
}