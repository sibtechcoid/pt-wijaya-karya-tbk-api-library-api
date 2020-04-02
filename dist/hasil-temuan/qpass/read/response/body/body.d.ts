import Record from "../../../../../record/record";
import Level from "../../../../level/reads/response/body/body";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Perbaikan from "../../../../../perbaikan/qpass/read/response/body/body";
import Id from "../../../../../id/id";
export default interface Body extends Record, Deactivate, Id {
    level: Omit<Level, 'parent' | 'levelUsaha'>;
    hasil: number;
    catatan: string;
    lampiran: string[];
    perbaikan: Omit<Perbaikan, 'hasilTemuan'> | null;
}
