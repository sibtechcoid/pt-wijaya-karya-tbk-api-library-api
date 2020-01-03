import Member from "../../../../anggota/create/request/body/body";
import Type from "../../../type/type";
import Id from "../../../../id/id";
import Schedule from "../../../../jadwal/update/request/body/body";

export default interface Body extends Id, Omit<Schedule,'rencana'> {

   // object ?: number;
    anggota ?: Member[];
    //type ? : Type;
    //status ? : Status;
}