import ProjectAccess from "../../../proyek/access";
import UnitKerjaAccess from "../../../object/access";
import UserAccess from "../../../user/access";
import RencanaAccess from "../../../rencana/access";
export default interface Body {
    proyek: ProjectAccess[];
    rencana: RencanaAccess[];
    user: UserAccess[];
    unitKerja: UnitKerjaAccess[];
}
