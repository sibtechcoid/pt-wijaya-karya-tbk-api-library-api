import Access from "../../../access/access";
import CreatePosition from "../../../create/request/body/body";
import Id from "../../../../../id/id";
import Group from "../../../group/group";
import Abbreviation from "../../../../../abbreviation/update/abbreviation";
import Name from "../../../../../name/update/name";

export default interface Body extends Abbreviation, Name, Id {

    access ?: Access[];
    group ?: Group;
}