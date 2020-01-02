import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
export default interface Body extends Name, Abbreviation {
    jenisUnit: number;
}
