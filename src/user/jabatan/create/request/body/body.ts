import Akses from "../../../../akses/create/request/body/body";
import Singkatan from "../../../../../singkatan/create/singkatan";
import Nama from "../../../../../nama/create/nama";

export default interface Body extends Singkatan, Nama {

    akses : Akses
   // levels : number[];
}