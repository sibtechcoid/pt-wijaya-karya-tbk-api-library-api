import Rencana from "../../../recana/access";
import jadwalRinci from "../../../jadwal-rinci/access";
import Proyek from "../../../proyek/access";
export default interface Body {
    proyek: Proyek[];
    jadwalRinci: jadwalRinci[];
    rencana: Rencana[];
}
