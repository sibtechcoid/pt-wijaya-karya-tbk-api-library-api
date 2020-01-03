import Akses from "../../../akses/create/request/body/body";
import ReadsBody from "../../../reads/response/body/body";
export default interface Body extends ReadsBody {
    extraAkses: Akses;
    akses: Akses;
}
