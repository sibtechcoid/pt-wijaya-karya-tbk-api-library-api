import Name from "../../../../../name/name";
import Abbreviation from "../../../../../abbreviation/abbreviation";
export default interface Object extends Name, Abbreviation {
    address: string;
    business: number;
    level: number;
}
