import Nama from "../../../../../nama/update/nama";
import Id from "../../../../../id/id";
export default interface Body extends Nama, Id {
    auditProgram?: number;
}
