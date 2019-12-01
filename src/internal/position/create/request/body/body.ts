import Access from "../../../access/access";
import Group from "../../../group/group";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Name from "../../../../../name/create/name";

export default interface Body extends Name, Abbreviation {

    access : Access[];
    group : Group;
}