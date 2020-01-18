import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Jabatan from "../../../jabatan/read/response/body/body";
import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";
export default interface Body extends Record, Deactivate, Id, Nama, Singkatan {
    singkatan: string;
    jabatan: Omit<Jabatan, 'akses'> | null;
    user: string;
    telepon: string | null;
    email: string | null;
    nip: string | null;
    aktif: boolean;
    jabatanWika: null | string;
    parentId: string | null;
}
