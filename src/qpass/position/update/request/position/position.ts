import LevelType from "../../../../../qpass/place/level/read/response/type/type";
import Access from "../../../../position/create/request/access/access";
import CreatePosition from "../../../create/request/position/position";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Group from "../../../create/request/group/group";

export default interface Position extends CreatePosition, Id {

    access : Access[];
    group : Group;
}