import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Nama from "../../../../../nama/create/nama";
import Singkatan from "../../../../../singkatan/create/singkatan";
import Type from "../../../../jenis-unit/reads/response/body/body";
export default interface Body extends Id, Record, Deactivate, Nama, Singkatan {
    type: Omit<Type, 'business' | 'level'>;
}
