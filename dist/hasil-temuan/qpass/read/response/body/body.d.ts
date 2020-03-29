import Record from "../../../../../record/record";
import Level from "../../../../level/reads/response/body/body";
import Deactivate from "../../../../../deactivate/read/response/body/body";
export default interface Body extends Record, Deactivate {
    level: Omit<Level, 'parent' | 'levelUsaha'>;
    hasil: number;
    catatan: string;
    lampiran: string[];
}
