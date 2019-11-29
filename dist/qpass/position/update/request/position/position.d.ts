import Access from "../../../access/access";
import CreatePosition from "../../../create/request/body/body";
import Id from "../../../../../id/id";
import Group from "../../../group/group";
export default interface Position extends CreatePosition, Id {
    access: Access[];
    group: Group;
}
