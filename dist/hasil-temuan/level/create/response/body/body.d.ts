import ReadBody from "../../../read/response/body/body";
import LevelUsaha from "../../../../../unit-kerja/level-usaha/reads/response/body/body";
export default interface Body extends Omit<ReadBody, 'levelUsaha'> {
    levelUsaha: Omit<LevelUsaha, 'jenisUnit'>;
}
