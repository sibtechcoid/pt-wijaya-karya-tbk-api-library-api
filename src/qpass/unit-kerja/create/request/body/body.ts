import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";

export default interface Body extends Name, Abbreviation {

    address : string;
    business: number;
    level: number;
    type : number;
    // name : string;
    // abbreviation : string;
}