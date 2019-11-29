import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
export default interface Object extends Name, Abbreviation {
    address: string;
    business: number;
    level: number;
}
