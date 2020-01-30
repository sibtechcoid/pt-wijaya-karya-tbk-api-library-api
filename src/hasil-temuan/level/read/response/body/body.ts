import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import Type from "../../../type/type";

export default interface Body extends Deactivate, Record, Id, Nama  {

    tipe : Type;
   // levelUsaha : Omit<LevelUsaha,'jenisUnit'>;
    judul : boolean;
    nama : string;
    bobot : null|number;
    point : null|number;
    //parent: Omit<Body, 'judul'|'levelUsaha'|'parent'>|null;
    turunan : Omit<Body, 'turunan'>[]


}