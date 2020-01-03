import Nama from "../../../../../nama/create/nama";
import Type from "../../../type/type";

export default interface Body extends Nama {

    auditProgram : number;
    nama : string;
    bobot : number;
    point : number;
    tipe : Type;
}