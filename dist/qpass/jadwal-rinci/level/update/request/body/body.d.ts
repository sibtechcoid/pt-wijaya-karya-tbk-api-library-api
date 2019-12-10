import Name from "../../../../../../name/update/name";
import Id from "../../../../../../id/id";
import Type from "../../../type/type";
export default interface Body extends Name, Id {
    auditProgram?: number;
    name?: string;
    bobot?: number;
    point?: number;
    tipe?: Type;
}
