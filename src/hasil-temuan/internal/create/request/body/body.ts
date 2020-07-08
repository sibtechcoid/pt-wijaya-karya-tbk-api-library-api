import Tinjauan from "../../../tinjauan/tinjauan";

export default interface Body {
    jadwalRinci : number;
    prosesBisnis : number;
    prosedur : number;
    klausul : number[];
    fungsi : number[];

    tinjauan : Tinjauan;
    tinjauanCatatan : string;
    masalah : string[];
    objek : string[]

    kriteria : number[];

    lampiran : string[]

}
