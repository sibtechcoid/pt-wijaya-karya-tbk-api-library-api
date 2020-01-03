import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import Singkatan from "../../../../../singkatan/create/singkatan";
import Type from "../../../../jenis-unit/reads/response/body/body";

export default interface Body extends Deactivate, Record, Id, Nama, Singkatan {

    // tobe deprecated
    //jenisUsaha : Omit<Business,'level'>;

    type : Omit<Type,'business'|'level'>
}