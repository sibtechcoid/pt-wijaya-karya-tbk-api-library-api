import Akses from "../../../../akses/create/request/body/body";
import Singkatan from "../../../../../singkatan/create/singkatan";
import Nama from "../../../../../nama/create/nama";
import Type from "../../../type/type";
export default interface Body extends Singkatan, Nama {
    akses: Akses;
    tipe: Type;
}
