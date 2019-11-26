import Access from "../../../../access/update/request/access/access";
import NameAbbreviation from "../../../../../name-abbreviation/name-abbreviation";

export default interface Position extends NameAbbreviation {

    access : Access
   // levels : number[];
}