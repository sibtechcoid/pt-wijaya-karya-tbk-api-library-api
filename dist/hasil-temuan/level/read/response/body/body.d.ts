import Deactivate from "../../../../../deactivate/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Nama from "../../../../../nama/create/nama";
import Type from "../../../type/type";
export default interface Body extends Deactivate, Record, Id, Nama {
    tipe: Type;
    judul: boolean;
    nama: string;
    bobot: null | number;
    point: null | number;
    turunan: Omit<Body, 'turunan'>[];
}
