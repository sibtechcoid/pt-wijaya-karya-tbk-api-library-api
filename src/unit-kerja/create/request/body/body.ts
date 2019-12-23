import Name from "../../../../name/create/name";
import Abbreviation from "../../../../abbreviation/create/abbreviation";

export default interface Body extends Name, Abbreviation {

    address   : string;
    jenisUsaha: number;
    levelUsaha: number;
    jenisUnit : number;
    // name : string;
    // abbreviation : string;
}