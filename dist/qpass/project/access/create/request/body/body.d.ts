import Rencana from "../../../recana/access";
import SuratTugas from "../../../jadwal-rinci/access";
import Proyek from "../../../proyek/access";
export default interface Body {
    proyek: Proyek[];
    suratTugas: SuratTugas[];
    rencana: Rencana[];
}
