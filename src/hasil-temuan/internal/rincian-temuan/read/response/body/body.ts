import JadwalRinci from "../../../../../../jadwal-rinci/internal/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Fungsi from "../../../../../../jadwal-rinci/fungsi/read/response/body/body";
import Prosedur from "../../../../../../jadwal-rinci/prosedur/read/response/body/body";
import Klausul from "../../../../../../jadwal-rinci/klausul/read/response/body/body";
import Body from "../../../../../kriteria/read/response/body/body";

// export default Body;


export default interface Bodyz extends Record, Id  {

    jadwalRinci : Omit<JadwalRinci, 'audit'|'fungsi'|'prosedur'|'prosesBisnis'|'klausul'|'auditor'>;
    prosedur : Omit<Prosedur,'prosesBisnis'>;
    klausul : Omit<Klausul,'auditProgram'>[];
    fungsi : Fungsi[];

    problem : string[];
    objek : string[]

    kriteria : Body[];

    // lampiran file identifier from lampiran api
    lampiran : string[]


}