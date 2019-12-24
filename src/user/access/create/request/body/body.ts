import ProjectAccess from "../../../../../qpass/project/access/access";
import UnitKerjaAccess from "../../../../../qpass/object/access/access";
import UserAccess from "../../../../../user/access/access";

export default interface Body {

    // project : {[key in ProjectAccess] : boolean};
    // user : {[key in UserAccess] : boolean};
    // unitKerja : {[key in UnitKerjaAccess] : boolean};

    project : ProjectAccess[];
    user : UserAccess[];
    unitKerja : UnitKerjaAccess[];
}
