import Id from "../../../../id/id";
import Project from "../../../../audit/read/response/body/body";
import Lampiran from "../../../lampiran/create/request/body/body";
import Record from "../../../../record/record";

export default interface Body extends Id, Record {

    // TODO fix any
    // TODO fix structure
    audit : Omit<Project,'member'>[];
    nomer : string;
    lampiran : (Id & Omit<Lampiran,'data'>)[]
   // jenisUnit: null|Type;
}