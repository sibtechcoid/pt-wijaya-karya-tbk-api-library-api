import Project from "../../../proyek/akses";
import Rencana from "../../../rencana/akses";
import JadwalRinci from "../../../jadwal-rinci/akses";
export default interface Body {
    jadwalRinci: JadwalRinci[];
    proyek: Project[];
    rencana: Rencana[];
}
