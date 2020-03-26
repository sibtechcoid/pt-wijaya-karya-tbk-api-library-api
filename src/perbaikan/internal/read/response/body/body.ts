import HasilTemuanRead from "../../../../../hasil-temuan/internal/read/response/body/body";
import Keputusan from "../../../../internal/keputusan/keputusan";
import Tinjauan from "../../../tinjauan/tinjauan";
import User from "../../../../../user/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";

export default interface Body extends Record, Id {

    hasilTemuan: number;

    /**
     * perintah
     */
    faktor : null|string;
    analisis : null|string;
    tinjauan : null|Tinjauan;
    tinjauanCatatan : null|string;
    perbaikan : null|string|Date;
    closing : string[];
    pic : Omit<User,'extraAkses'|'akses'|'jabatan'>|null;

    /**
     * PTKA
     */
    prsedur : number;
    noPtka : null|string;
    konsekuensi : null|string;
    referensi : null|string;
    keputusan : null|Keputusan;
    selesai : null|string|Date;

    /**
     * remark
     */
    ditutup : boolean;
    catatan : null|string

    /**
     * submitted
     */
    submit : boolean;
}
