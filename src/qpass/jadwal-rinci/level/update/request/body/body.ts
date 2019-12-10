import Name from "../../../../../../name/update/name";
import Id from "../../../../../../id/id";

export default interface Body extends Name, Id {

    auditProgram ?: number;
}