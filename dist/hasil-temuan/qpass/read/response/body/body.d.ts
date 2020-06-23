import Record from "../../../../../record/record";
import Level from "../../../../level/reads/response/body/body";
import Ruangan from "../../../../ruangan/reads/response/body/body";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Perbaikan from "../../../../../perbaikan/qpass/read/response/body/body";
import Id from "../../../../../id/id";
export default interface Body extends Record, Deactivate, Id {
    level: Omit<Level, 'parent' | 'levelUsaha' | 'ruangan'>;
    ruangan: Omit<Ruangan, 'level'>;
    hasil: number;
    catatan: string;
    lampiran: string[];
    sampel: number;
    perbaikan: Omit<Perbaikan, 'hasilTemuan'> | null;
}
