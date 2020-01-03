import Member from "../../../../anggota/create/request/body/body";
import Type from "../../../type/type";
import Id from "../../../../id/id";
import Schedule from "../../../../schedule/update/request/body/body";

export default interface Body extends Id, Omit<Schedule,'plan'> {

   // object ?: number;
    anggota ?: Member[];
    //type ? : Type;
    //status ? : Status;
}