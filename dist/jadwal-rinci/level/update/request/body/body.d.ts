import Nama from "../../../../../nama/update/nama";
import Id from "../../../../../id/id";
import Type from "../../../type/type";
export default interface Body extends Nama, Id {
    auditProgram?: number;
    nama?: string;
    bobot?: number;
    point?: number;
    tipe?: Type;
}
