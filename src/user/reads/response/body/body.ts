import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Akses from "../../../akses/create/request/body/body";
import Jabatan from "../../../jabatan/read/response/body/body";

export default interface Body extends Record, Deactivate, Id {

    //extraAkses : Akses;
   // akses : Akses;
    jabatan : Omit<Jabatan, 'akses'>|null;
    nama : string;
    user : string;
    singkatan : string|null;
    telepon : string|null;
    email : string|null;
    nip : string|null;
    aktif : boolean;
    jabatanWika : null|string;
    parentId : string|null;
}