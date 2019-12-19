import Id from "../../../../../id/id";
import Project from "../../../../project/read/response/body/body";
import Lampiran from "../../../lampiran/create/request/body/body";
export default interface Body extends Id {
    project: Omit<Project, 'member'>[];
    nomer: string;
    lampiran: (Id & Omit<Lampiran, 'data'>)[];
}
