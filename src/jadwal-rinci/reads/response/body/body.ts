import ReadBody from "../../../read/response/body/body";
import Fungsi from "../../../fungsi/read/response/body/body";
import Prosedur from "../../../prosedur/read/response/body/body";
import ProsesBisnis from "../../../proses-bisnis/read/response/body/body";
import Klausul from "../../../klausul/read/response/body/body";


export default interface Body extends ReadBody  {


    // audit : Project;
    // selesai  : Date|string;
    // mulai  : Date|string;
    // fungsi : Fungsi[];
    // prosedur : Prosedur[];
    // prosesBisnis : number|ProsesBisnis;
    // klausul : number[]|Klausul;

}