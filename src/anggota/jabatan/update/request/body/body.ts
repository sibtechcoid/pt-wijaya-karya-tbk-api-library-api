import Id from "../../../../../id/id";
import CreateBody from "../../../create/request/body/body";
import Group from "../../../group/group";
import Akses from "../../../../../user/akses/update/request/body/body";

export default interface Body extends Partial<Omit<CreateBody,'akses'>>, Id {

    akses ?: Omit<Akses, 'id'>;
}
