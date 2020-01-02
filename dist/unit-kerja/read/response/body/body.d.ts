import JenisUsaha from "../../../jenis-usaha/read/response/body/body";
import LevelUsaha from "../../../level-usaha/read/response/body/body";
import JenisUnit from "../../../jenis-unit/read/response/body/body";
import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Name from "../../../../name/create/name";
import Abbreviation from "../../../../abbreviation/create/abbreviation";
export default interface Body extends Record, Deactivate, Id, Name, Abbreviation {
    address: null | string;
    jenisUsaha: null | Omit<JenisUsaha, 'jenisUnit'>;
    levelUsaha: null | Omit<LevelUsaha, 'jenisUnit'>;
    jenisUnit: null | Omit<JenisUnit, 'levelUsaha' | 'jenisUsaha'>;
}
