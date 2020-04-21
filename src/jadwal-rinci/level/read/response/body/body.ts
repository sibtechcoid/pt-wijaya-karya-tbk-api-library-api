import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import LevelUsaha from "../../../../../unit-kerja/level-usaha/read/response/body/body";

export default interface Body extends Deactivate, Record, Id, Nama  {

    levelUsaha: Omit<LevelUsaha,'jenisUnit'>;
    judul : boolean;
    nama : string;
    bobot : null|number;
    point : null|number;

}
