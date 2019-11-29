import Access from "../../../../position/create/request/access/access";
import CreatePosition from "../../../create/request/position/position";
import Id from "../../../../../id/id";
import Group from "../../../create/request/group/group";
export default interface Position extends CreatePosition, Id {
    access: Access[];
    group: Group;
}
