import ProjectAccess from "../../../../../qpass/project/access/access";
import UnitKerjaAccess from "../../../../../qpass/object/access/access";
import UserAccess from "../../../../../user/access/access";
export default interface Body {
    project: ProjectAccess[];
    user: UserAccess[];
    unitKerja: UnitKerjaAccess[];
}
