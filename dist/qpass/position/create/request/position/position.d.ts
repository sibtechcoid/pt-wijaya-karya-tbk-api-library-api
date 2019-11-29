import Access from "../access/access";
import Group from "../group/group";
import Abbreviation from "../../../../../abbreviation/abbreviation";
import Name from "../../../../../name/name";
export default interface Position extends Abbreviation, Name {
    access: Access[];
    group: Group;
}
