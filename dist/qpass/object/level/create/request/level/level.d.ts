import Name from "../../../../../../name/name";
import Abbreviation from "../../../../../../abbreviation/abbreviation";
export default interface Level extends Name, Abbreviation {
    type: number;
}
