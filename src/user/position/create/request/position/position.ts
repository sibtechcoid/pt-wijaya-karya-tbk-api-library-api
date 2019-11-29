import Access from "../../../../access/update/request/access/access";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Name from "../../../../../name/create/name";

export default interface Position extends Abbreviation, Name {

    access : Access
   // levels : number[];
}