import Tinjauan from "../../../tinjauan/tinjauan";
import Keputusan from "../../../../keputusan/keputusan";

export default interface Body {

    hasilTemuan: number;

    /**
     * perintah
     */
    faktor : string;
    analisis : string;
    tinjauan : Tinjauan;
    tinjauanCatatan : string;
    perbaikan : string|Date;
    closing : string[];
    pic : number;

    /**
     * PTKA
     */
    prsedur : number;
    noPtka : string;
    konsekuensi : string;
    referensi : string;
    keputusan : Keputusan;
    selesai : string|Date;

    /**
     * remark
     */
    ditutup : boolean;
    catatan : string

}
