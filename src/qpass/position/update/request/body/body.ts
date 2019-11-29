import Access from "../../../access/access";
import Group from "../../../group/group";
import Abbreviation from "../../../../../abbreviation/update/abbreviation";
import Name from "../../../../../name/update/name";
import Id from "../../../../../id/id";

export default interface Body extends Id, Abbreviation, Name {

    access ?: Access[];
    group ?: Group;
}