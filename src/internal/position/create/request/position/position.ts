import Access from "../access/access";
import Group from "../group/group";
import Abbreviation from "../../../../../abbreviation/abbreviation";
import Name from "../../../../../name/name";

export default interface Position extends Name, Abbreviation {

    access : Access[];
    group : Group;
}