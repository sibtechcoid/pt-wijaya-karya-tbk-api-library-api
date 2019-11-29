import Access from "../../../../access/update/request/access/access";
import Abbreviation from "../../../../../abbreviation/abbreviation";
import Name from "../../../../../name/name";

export default interface Position extends Abbreviation, Name {

    access : Access
   // levels : number[];
}