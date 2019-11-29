import Access from "../../../../access/update/request/body/body";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Name from "../../../../../name/create/name";

export default interface Body extends Abbreviation, Name {

    access : Access
   // levels : number[];
}