import Member from "../../../../anggota/create/request/body/body";
import Type from "../../../type/type";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/update/request/body/body";

export default interface Body extends Id, Schedule {

    unitKerja ?: number;
    anggota ?: Member[];
    tipe ?: Type;
    //status ? : Status;
}