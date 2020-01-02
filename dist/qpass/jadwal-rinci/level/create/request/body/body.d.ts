import Name from "../../../../../../name/create/name";
import Type from "../../../type/type";
export default interface Body extends Name {
    auditProgram: number;
    name: string;
    bobot: number;
    point: number;
    tipe: Type;
}
