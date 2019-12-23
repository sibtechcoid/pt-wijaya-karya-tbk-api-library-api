import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Level from "../../../../level-usaha/read/response/body/body";
import JenisUsaha from "../../../../jenis-usaha/read/response/body/body";

export default interface Body extends Deactivate, Record, Id, Name, Abbreviation  {

    jenisUsaha : Omit<JenisUsaha,'type'>[]
    levelUsaha : Omit<Level,'type'>[]
}