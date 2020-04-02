import Tinjauan from "../../../tinjauan/tinjauan";
import Keputusan from "../../../../keputusan/keputusan";
import User from "../../../../../user/read/response/body/body";
import HasilTemuan from "../../../../../hasil-temuan/internal/read/response/body/body";

export default interface Body {

    hasilTemuan: number;

    /**
     * perintah
     */
    prosesBisnis : number;
    faktor : string;
    analisis : string;
    tindakan : string;
    perbaikan : null|string|Date;
    pic : number|null;
    closing : string[];

    /**
     * PTKA
     */
    prosedur : number;
    ptka : string;
    konsekuensi : string;
    keputusan : null|Keputusan;

    selesai : null|string|Date;

    /**
     * remarks
     */
    ditutup : boolean;
    catatan : string;

}
