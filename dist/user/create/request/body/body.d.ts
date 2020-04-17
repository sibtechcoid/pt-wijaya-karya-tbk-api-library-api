import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";
export default interface Body extends Nama, Singkatan {
    singkatan: string;
    jabatan: number | null;
    jabatanWika: string | null;
    nip: string | null;
    password: string;
    user: string;
    telepon: null | string;
    email: null | string;
}
