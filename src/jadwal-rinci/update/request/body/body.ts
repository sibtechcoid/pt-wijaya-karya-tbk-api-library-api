import Id from "../../../../id/id";
import CreateBody from "../../../create/request/body/body";

export default interface Body extends Id, Partial<CreateBody> {
    // audit ?: number;
    // selesai  ?: Date|string;
    // mulai  ?: Date|string;
    // fungsi ?: number[];
    // prosedur ?: number;
}