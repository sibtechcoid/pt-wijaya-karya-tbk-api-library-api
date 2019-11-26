import Access from "../access/access";
import Group from "../group/group";
import NameAbbreviation from "../../../../../name-abbreviation/name-abbreviation";
export default interface Position extends NameAbbreviation {
    access: Access[];
    group: Group;
}
