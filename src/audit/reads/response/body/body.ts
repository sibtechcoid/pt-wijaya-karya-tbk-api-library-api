import Member from "../../../../anggota/read/response/body/body";
import Type from "../../../type/type";
import Read from "../../../read/response/body/body";

export default interface Body extends Omit<Read, 'anggota'|'penyetuju'|'penolakan'|'suratTugas'> {

    anggota : Omit<Member,'akses'>[]
    tipe : Type;
}
