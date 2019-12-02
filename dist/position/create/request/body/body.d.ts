import Abbreviation from "../../../../abbreviation/create/abbreviation";
import Name from "../../../../name/create/name";
export default interface Body<Access, Group> extends Abbreviation, Name {
    group: Group;
    access: Access;
}
