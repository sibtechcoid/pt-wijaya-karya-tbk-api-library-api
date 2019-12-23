import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Name from "../../../../../name/create/name";

export default interface Body extends Name, Abbreviation {

    jenisUnit : number;
}