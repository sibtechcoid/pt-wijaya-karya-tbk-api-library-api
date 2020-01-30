import Id from "../../../../id/id";
import Project from "../../../../audit/read/response/body/body";
import Record from "../../../../record/record";
export default interface Body extends Id, Record {
    audit: Omit<Project, 'anggota' | 'penolakan' | 'penyetuju'>[];
    nomer: string;
    /**
     * file path
     */
    lampiran: string[];
}
