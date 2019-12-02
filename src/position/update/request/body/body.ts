import Abbreviation from "../../../../abbreviation/update/abbreviation";
import Name from "../../../../name/update/name";
import Id from "../../../../id/id";

export default interface Body<Access> extends Id, Abbreviation, Name {

    access ?: Access;
}