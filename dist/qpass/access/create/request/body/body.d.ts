import Project from "../../../proyek/access";
import Rencana from "../../../rencana/access";
import JadwalRinci from "../../../jadwal-rinci/access";
export default interface Body {
    jadwalRinci: JadwalRinci[];
    proyek: Project[];
    rencana: Rencana[];
}
