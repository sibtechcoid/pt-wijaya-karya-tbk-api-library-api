import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
export default interface Body extends Deactivate, Record, Id {
    project: number;
    selesai: Date | string;
    mulai: Date | string;
    fungsi: number[];
    prosedur: number[];
}
