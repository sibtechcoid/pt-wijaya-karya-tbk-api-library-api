import JenisUSaha from "../../../jenis-usaha/read/response/body/body";
import LevelUsaha from "../../../level-usaha/read/response/body/body";
import JenisUnit from "../../../jenis-unit/read/response/body/body";
export default interface Body {
    jenisUSaha: null | JenisUSaha;
    levelUsaha: null | Omit<LevelUsaha, 'type'>;
    jenisUnit: null | JenisUnit;
}
