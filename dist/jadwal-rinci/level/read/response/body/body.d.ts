import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
export default interface Body extends Deactivate, Record, Id, Nama {
    judul: boolean;
    nama: string;
    bobot: null | number;
    point: null | number;
}
