import Access from "../../../../access/create/request/body/body";
import Abbreviation from "../../../../../abbreviation/update/abbreviation";
import Name from "../../../../../name/update/name";
import Id from "../../../../../id/id";
export default interface Body extends Id, Abbreviation, Name {
    access?: Access;
}
