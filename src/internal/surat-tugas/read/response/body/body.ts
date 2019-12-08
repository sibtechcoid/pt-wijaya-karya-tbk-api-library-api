import Id from "../../../../../id/id";
import Project from "../../../../project/read/response/project/project";
import Lampiran from "../../../lampiran/create/request/body/body";

export default interface Body extends Id {

    // TODO fix any
    // TODO fix structure
    project : Omit<Project,'member'>[];
    nomer : string;
    lampiran : (Id & Omit<Lampiran,'data'>)[]
   // type: null|Type;
}