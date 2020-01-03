import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";

export default interface Body extends Nama, Singkatan {

    alamat : string;
    jenisUsaha: number;
    levelUsaha: number;
    jenisUnit : number;
    // nama : string;
    // singkatan : string;
}