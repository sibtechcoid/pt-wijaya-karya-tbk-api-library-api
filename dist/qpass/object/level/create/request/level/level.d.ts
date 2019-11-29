import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
export default interface Level extends Name, Abbreviation {
    type: number;
}
