import Member from "../../../../anggota/create/request/body/body";
import Status from "../../../status/status";
import Type from "../../../type/type";
import Schedule from "../../../../schedule/create/request/body/body";

export default interface Body extends /*audit<Member>,*/ Schedule {

    object : number;
    anggota : Member[];
    status : Status;
    type : Type;
}