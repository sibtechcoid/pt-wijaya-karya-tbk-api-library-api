import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import Singkatan from "../../../../../singkatan/create/singkatan";
import Level from "../../../../level-usaha/read/response/body/body";
import jenisUsaha from "../../../../jenis-usaha/read/response/body/body";

export default interface Body extends Deactivate, Record, Id, Nama, Singkatan  {

    jenisUsaha : Omit<jenisUsaha,'jenisUnit'>[]
    levelUsaha : Omit<Level,'jenisUnit'>[]
}