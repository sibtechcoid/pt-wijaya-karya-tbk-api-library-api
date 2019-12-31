import Group from "../../../group/group";
import Access from "../../../../access/create/request/body/body";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Name from "../../../../../name/create/name";
export default interface Body extends Abbreviation, Name {
    group: Group;
    access: Access;
}
