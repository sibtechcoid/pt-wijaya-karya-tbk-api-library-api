import ProjectAccess from "../../../proyek/access";
import UnitKerjaAccess from "../../../unit-kerja/access";
import UserAccess from "../../../user/access";
import RencanaAccess from "../../../rencana/access";

export default interface Body {

    // project : {[key in ProjectAccess] : boolean};
    // user : {[key in UserAccess] : boolean};
    // unitKerja : {[key in UnitKerjaAccess] : boolean};

    proyek : ProjectAccess[];
    rencana : RencanaAccess[];
    user : UserAccess[];
    unitKerja : UnitKerjaAccess[];
}
