import JenisUSaha from "../../../jenis-usaha/read/response/body/body";
import LevelUsaha from "../../../level-usaha/read/response/body/body";
import JenisUnit from "../../../jenis-unit/read/response/body/body";
import UnitKerja from "../../../../unit-kerja/read/response/body/body";

export default interface Body  {

    //address : null|string;
    // wikaParentId : null|number;
    // // TODO nullable?
    // wikaType : string|null;
    // // TODO nullable?
    // wikaId : number|null;
    jenisUSaha  : null|JenisUSaha;
    levelUsaha  : null|Omit<LevelUsaha,'type'>;
    jenisUnit   : null|JenisUnit;
}