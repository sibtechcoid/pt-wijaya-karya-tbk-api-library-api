import Nama from "../../../../../nama/create/nama";
import Singkatan from "../../../../../singkatan/create/singkatan";

export default interface Body extends Nama, Singkatan {

    jenisUnit : number;
    //jenisUsaha : number;
}