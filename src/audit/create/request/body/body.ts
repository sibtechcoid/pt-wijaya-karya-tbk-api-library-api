import Member from "../../../../anggota/create/request/body/body";
import Status from "../../../status/status";
import Type from "../../../type/type";
import Schedule from "../../../../jadwal/create/request/body/body";

export default interface Body extends Schedule {

    unitKerja : number;
    anggota : Member[];
    status : Status;
    tipe : Type;
}