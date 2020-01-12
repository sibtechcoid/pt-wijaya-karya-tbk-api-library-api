import Nama from "../../../../../nama/create/nama";

export default interface Body extends Nama {

    levelUsaha : number;
    nama : string;
    bobot : null|number;
    point : null|number;
    parent : number|null;
    judul : boolean;
}