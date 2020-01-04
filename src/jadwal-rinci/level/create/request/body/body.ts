import Nama from "../../../../../nama/create/nama";

export default interface Body extends Nama {

    auditProgram : number;
    nama : string;
    bobot : number;
    point : number;
    parent : number;
    judul : boolean;
}