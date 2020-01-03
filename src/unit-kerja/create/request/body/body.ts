import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";

export default interface Body extends Nama, Singkatan {

    alamat : string;
    jenisUsaha: number;
    level: number;
    type : number;
    // nama : string;
    // singkatan : string;
}