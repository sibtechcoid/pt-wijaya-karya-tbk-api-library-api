import JenisUsaha from "../../../jenis-usaha/read/response/body/body";
import LevelUsaha from "../../../level-usaha/read/response/body/body";
import JenisUnit from "../../../jenis-unit/read/response/body/body";
import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Name from "../../../../name/create/name";
import Abbreviation from "../../../../abbreviation/create/abbreviation";

export default interface Body extends Record, Deactivate, Id, Name, Abbreviation {

    //address : null|string;
    // wikaParentId : null|number;
    // // TODO nullable?
    // wikaType : string|null;
    // // TODO nullable?
    // wikaId : number|null;
    jenisUsaha  : null|JenisUsaha;
    levelUsaha  : null|Omit<LevelUsaha,'type'>;
    jenisUnit   : null|JenisUnit;
}