import Member from "../../../../anggota/create/request/body/body";
import Status from "../../../status/status";
import Type from "../../../type/type";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/update/request/body/body";

export default interface Body  extends Id, Schedule {

    unitKerja ?: number;
    anggota ?: Omit<Member, 'id'>[];
    tipe ? : Type;
    status ? : Status;
}