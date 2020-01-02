import Name from "../../../../name/update/name";
import Abbreviation from "../../../../abbreviation/update/abbreviation";
import Id from "../../../../id/id";
export default interface Body extends Name, Abbreviation, Id {
    address?: string;
    levelUsaha?: number;
    /**
     * type id
     */
    jenisUnit?: number;
    jenisUsaha?: number;
}
