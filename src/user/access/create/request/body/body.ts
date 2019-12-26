import Project from "../../../proyek/access";
import UnitKerja from "../../../unit-kerja/access";
import JenisUnit from "../../../jenis-unit/access";
import JenisUsaha from "../../../jenis-usaha/access";
import LevelUsaha from "../../../level-usaha/access";
import UserAccess from "../../../user/access";
import Rencana from "../../../rencana/access";

export default interface Body {

    proyek : Project[];
    rencana : Rencana[];
    user : UserAccess[];
    unitKerja : UnitKerja[];

    jenisUnit : JenisUnit[];
    jenisUsaha : JenisUsaha[];
    levelUsaha : LevelUsaha[];
}
