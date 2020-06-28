import Create from "../../../../create/request/body/body";
import Update from "../../../../update/request/body/body";

// export default interface Hasil {
//
//     /**
//      * hasil temuan level
//      */
//     level : number;
//     hasil : number;
//     catatan : string;
//     lampiran : string[];
//     ruangan : number;
//     sampel : number;
// }

type Hasil = Omit<Create, 'audit'>|Omit<Update, 'audit'>;

export default Hasil;
